/*
** EPITECH PROJECT, 2020
** HUB_epinaute_2020
** File description:
** Epinaute Project Backend
*/

import {Router} from 'express';
import httpStatus from 'http-status-codes';
import jwt from 'jsonwebtoken';

import {SERVER_SECRET_KEY} from '../config';
import logger from '../logger';
import Org from "../model/org";

const router: Router = Router();

router.post('/edit', async (req, res) => {
    const {accessToken, name, description, email}: any = req.body;

    if (!accessToken || !name || !description || !email) {
        logger.info("Bad request");
        return res.status(httpStatus.BAD_REQUEST).send("Bad Request");
    }
    try {
        let user: any;
        const org: any = await Org.findOne({name}).lean();

        jwt.verify(accessToken, SERVER_SECRET_KEY, (err: any, data: any) => {
            if (err) return;
            user = data;
        });
        if (!user) {
            logger.warn("Invalid token");
            res.status(httpStatus.UNAUTHORIZED).send("Invalid token");
        } else if (!org) {
            logger.warn("Organization doesn't exists");
            res.status(httpStatus.UNAUTHORIZED).send("Organization doesn't exists");
        } else {
            const _id = org._id;
            await Org.updateOne(
                {_id},
                {
                    $set: {name: name, description: description, email: email}
                }
            );
            logger.info("Organization " + _id +  " successfully updated");
            res.status(httpStatus.OK).send("Organization successfully updated");
        }
    } catch (error) {
        logger.error("Internal server error:\n" + error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Internal server error");
    }
});

router.get('/my', async (req, res) => {
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
        const name = user.organizationName;
        const org = await Org.findOne({name}).lean();
        if (!org) {
            logger.warn("Organization doesn't exists");
            res.status(httpStatus.UNAUTHORIZED).send("Organization doesn't exists");
        } else {
            logger.info("Organization " + org._id + " successfully returned");
            res.status(httpStatus.OK).json({org, info: 'Organization exists'});
        }
    }
});

router.get('/all', async (req, res) => {
    const orgs: any = await Org.find().lean();

    res.status(httpStatus.OK).json({orgs});
});

export default router;