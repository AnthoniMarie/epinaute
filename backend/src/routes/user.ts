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
import Org from "../model/org";
import User from '../model/user';
import logger from '../logger';

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
            logger.warn("User already exists ");
            res.status(httpStatus.CONFLICT).send("User already exists");
        } else {
            const user = await User.create({
                firstName: firstName,
                lastName: lastName,
                organizationName: organizationName,
                email: email,
                password: hashedPassword
            });
            const org = await Org.create({
                name: organizationName,
                description: "Here you can describe your organization",
                email: "example@epinaute.org"
            });
            logger.info("User " + user._id +  " successfully registered");
            logger.info("Organization " + org._id +  " successfully registered");
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
           const accessToken: string = jwt.sign({id: user._id, email: user.email,
               organizationName: user.organizationName}, SERVER_SECRET_KEY);
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

router.get('/me', async (req, res) => {
    if (!req.headers.authorization || req.headers.authorization.length === 0) {
        res.status(httpStatus.BAD_REQUEST).send("No bearer found");
    } else {
        const accessToken = req.headers.authorization.split(' ')[1];
        let user: any;

        jwt.verify(accessToken, SERVER_SECRET_KEY, (err, data) => {
            if (err)
                return;
            user = data;
        });
        if (!user) {
            logger.warn("Invalid token");
            return res.status(httpStatus.UNAUTHORIZED).send("Invalid token");
        }
        const currentUser: any = await User.findOne({email: user.email}).lean();
        if (!currentUser) {
            logger.warn("User doesn't exists");
            res.status(httpStatus.UNAUTHORIZED).send("User doesn't exists");
        } else {
            logger.info(user.email);
            logger.info("User " + currentUser._id + " successfully returned");
            res.status(httpStatus.OK).json({user: currentUser, info: 'User exists'});
        }
    }
});

export default router;