/*
** EPITECH PROJECT, 2020
** HUB_epinaute_2020
** File description:
** Epinaute Project Backend
*/

import * as mongoose from 'mongoose';
import {Model} from 'mongoose';

const UserSchema: any = new mongoose.Schema({
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    organizationName: { type: String, required: true},
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true}
}, {collection: 'users'});

const userModel: Model<any> = mongoose.model('User', UserSchema);

export default userModel