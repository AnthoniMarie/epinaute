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
import Organization from '../model/orgSchema';
import User from '../model/userSchema';
import {authenticate, IOrganization, IUser} from '../utils/utils';
import logger from "../utils/logger";

const router: Router = Router();

router.post('/register', async (req: any, res: any) => {
    const {firstName, lastName, organization, email, password}: IUser = req.body;

    if (!firstName || !lastName || !organization || !email || !password)
        return (res.sendStatus(httpStatus.BAD_REQUEST));

    try {
        if (await User.exists({email: email}))
            return (res.status(httpStatus.CONFLICT).send("User already exists"));

        const newUser: IUser = {firstName, lastName, organization, email, password: bcrypt.hashSync(password, 10)};
        const newOrg: IOrganization = {name: organization, location: 'N/A', description: 'N/A', email: 'N/A'};

        await User.create(newUser);
        await Organization.create(newOrg);
        res.status(httpStatus.OK).send("User successfully registered");
    } catch (error: any) {
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
});

router.post('/login', async (req: any, res: any) => {
    const {email, password}: IUser = req.body;

    if (!email || !password)
        return (res.sendStatus(httpStatus.BAD_REQUEST));

    try {
        const user: any = await User.findOne({email: email}).lean();

        if (!user || !await bcrypt.compare(password, user.password))
            return (res.status(httpStatus.UNAUTHORIZED).send("Invalid username or password"));

        const token: string = jwt.sign({id: user._id, email: user.email, organization: user.organization},
            SERVER_SECRET_KEY);

        res.status(httpStatus.OK).json({token, info: 'User successfully login'});
    } catch (error: any) {
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
});

router.get('/me', authenticate, async (req: any, res: any) => {
    const {email}: any = req.user;

    try {
        const user: any = await User.findOne({email: email}).lean();

        if (!user)
            return (res.status(httpStatus.UNAUTHORIZED).send("User doesn't exists"));

        res.status(httpStatus.OK).json({user, info: 'User exists'});
    } catch (error: any) {
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
});

export default router;