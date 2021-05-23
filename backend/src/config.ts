/*
** EPITECH PROJECT, 2020
** HUB_epinaute_2020
** File description:
** Epinaute Project Backend
*/

import { get } from "env-var";

const env = (name: string, required: boolean = true) => get(name).required(required);

export const SERVER_HOST: string = env('SERVER_HOST', false).default('127.0.0.1').asString();
export const SERVER_PORT: number = env('SERVER_PORT', false).default(4242).asPortNumber();

export const MONGODB_HOST: string = env('MONGODB_HOST', true).asString();
export const MONGODB_PORT: number = env('MONGODB_PORT', true).asPortNumber();
export const MONGODB_DB: string = env('MONGODB_DB', true).asString();