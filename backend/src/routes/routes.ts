/*
** EPITECH PROJECT, 2020
** HUB_epinaute_2020
** File description:
** Epinaute Project Backend
*/

import { Router } from 'express';

import auth from './auth';

const router = Router();

router.use('/auth', auth);

export default router;