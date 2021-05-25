/*
** EPITECH PROJECT, 2020
** HUB_epinaute_2020
** File description:
** Epinaute Project Backend
*/

import {Router} from "express";
import httpStatus from 'http-status-codes';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import {SERVER_SECRET_KEY} from '../config';
import User from '../model/user';
import logger from "../logger";

const router: Router = Router();

router.post('/register', async (req, res) => {
    const {firstName, lastName, organizationName, email, password}: any = req.body;

    if (!firstName || !lastName || !organizationName || !email || !password) {
        logger.info("Bad request");
        return res.status(httpStatus.BAD_REQUEST).send("Bad Request");
    }
    try {
        const userExists: boolean = await User.exists({ email: email });
        const hashedPassword: string = await bcrypt.hashSync(password, bcrypt.genSaltSync());
        if (userExists) {
            logger.warn("User already exists");
            res.status(httpStatus.CONFLICT).send("User already exists");
        } else {
            const user = await User.create({
                firstName: firstName,
                lastName: lastName,
                organizationName: organizationName,
                email: email,
                password: hashedPassword
            });
            logger.info("User " + user._id +  " successfully registered");
            res.status(httpStatus.OK).send("User successfully registered");
        }
    } catch (error) {
        logger.error("Internal server error: ", error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Internal server error");
    }
});

router.post('/login', async (req, res) => {
   const {email, password}: any = req.body;

   if (!email || !password) {
       logger.info("Bad request");
       return res.status(httpStatus.BAD_REQUEST).send("Bad Request");
   }
   try {
       const user: any = await User.findOne({email}).lean();
       if (!user) {
           logger.warn("Invalid username or password");
           res.status(httpStatus.UNAUTHORIZED).send("Invalid username or password");
       } else if (await bcrypt.compare(password, user.password)) {
           const accessToken: string = jwt.sign({id: user._id, username: user.username}, SERVER_SECRET_KEY);
           logger.info("User " + user._id +  " successfully login");
           res.status(httpStatus.OK).json({accessToken, info: 'User successfully login'});
       } else {
           logger.warn("Invalid username or password");
           res.status(httpStatus.UNAUTHORIZED).send("Invalid username or password");
       }
   } catch (error) {
       logger.error("Internal server error:\n" + error);
       res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Internal server error");
   }
});

export default router;