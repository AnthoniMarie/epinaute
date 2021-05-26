/*
** EPITECH PROJECT, 2020
** HUB_epinaute_2020
** File description:
** Epinaute Project Backend
*/

import {Router} from 'express';

import user from './user';
import org from './org';

const router: Router = Router();

router.use('/user', user);
router.use('/org', org);

export default router;