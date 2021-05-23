/*
** EPITECH PROJECT, 2020
** HUB_epinaute_2020
** File description:
** Epinaute Project Backend
*/

import { Router } from "express";
import httpStatus from 'http-status-codes';

const router = Router();

router.post('/register', async (req, res) => {
    res.status(httpStatus.OK).send('OK');
});

router.post('/login', async (req, res) => {
    res.status(httpStatus.OK).send('OK\n');
});

export default router;