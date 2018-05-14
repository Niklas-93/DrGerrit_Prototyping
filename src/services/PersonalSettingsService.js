"use strict";

import PersonalSettingsAPISimulator from "./PersonalSettingsAPISimulator";

export default class PersonalSettingsService {

    constructor(){
    }

    static getPersonalSetting(id) {
        return new Promise((resolve, reject) => {
            PersonalSettingsAPISimulator.getPersonalSettingByIdAsync(id).then((resp) => {
                if(resp.data != undefined && Object.keys(resp.data).length !== 0) {
                    console.log("service:"+resp.data);
                    resolve(resp.data);
                } else {
                    reject('Error while retrieving personalsetting');
                }
            }).catch((e) => {
                reject(e);
            });
        });
    }
}