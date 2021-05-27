/*
** EPITECH PROJECT, 2020
** HUB_epinaute_2020
** File description:
** Epinaute Project Backend
*/

import jwt from 'jsonwebtoken';
import httpStatus from 'http-status-codes';

import {SERVER_SECRET_KEY} from '../config';

export interface IUser {
    firstName: string,
    lastName: string,
    organization: string,
    email: string,
    password: string;
}

export interface IOrganization {
    name: string,
    location: string,
    description: string,
    email: string;
}

export function authenticate(req: any, res: any, next: any): void {
    const authHeader: string = req.headers.authorization;
    const token: string = authHeader && authHeader.split(' ')[1];

    if (!token)
        return (res.status(httpStatus.UNAUTHORIZED).send("Invalid token"));
    jwt.verify(token, SERVER_SECRET_KEY, (err: any, user: any) => {
        if (err)
            return (res.status(httpStatus.UNAUTHORIZED).send("Invalid token"));
        req.user = user;
        next();
    });
}