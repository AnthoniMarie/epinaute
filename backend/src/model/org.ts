/*
** EPITECH PROJECT, 2020
** HUB_epinaute_2020
** File description:
** Epinaute Project Backend
*/

import * as mongoose from 'mongoose';
import {Model} from 'mongoose';

const OrgSchema: any = new mongoose.Schema({
    name: { type: String, required: true, unique: true},
    description: { type: String, required: true},
    email: { type: String, required: true}
}, {collection: 'orgs'});

const orgModel: Model<any> = mongoose.model('Org', OrgSchema);

export default orgModel;