/*
** EPITECH PROJECT, 2020
** HUB_epinaute_2020
** File description:
** Epinaute Project Backend
*/

import * as mongoose from 'mongoose';
import {Model} from 'mongoose';

const OrganizationSchema: any = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    location: {type: String, required: true},
    description: {type: String, required: true},
    email: {type: String, required: true}
}, {collection: 'organizations'});

const orgModel: Model<any> = mongoose.model('Organization', OrganizationSchema);

export default orgModel;