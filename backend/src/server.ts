/*
** EPITECH PROJECT, 2020
** HUB_epinaute_2020
** File description:
** Epinaute Project Backend
*/

import express, {Express} from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from "cors";

import {SERVER_HOST, SERVER_PORT, MONGODB_HOST, MONGODB_PORT, MONGODB_DB} from "./config";
import logger from './utils/logger';
import router from './routes/routes';

const server: Express = express();

mongoose.connect(`mongodb://${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

// server.use('/', express.static(path.join(__dirname, 'public')))
server.use(cors());
server.use(bodyParser.json());
server.use(router);

server.listen(SERVER_PORT, () => {
    logger.info(`Server is listening on http://${SERVER_HOST}:${SERVER_PORT}`);
});