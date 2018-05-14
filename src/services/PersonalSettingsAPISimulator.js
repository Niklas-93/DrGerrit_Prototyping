import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const ObjectId = (m = Math, d = Date, h = 16, s = s => m.floor(s).toString(h)) => s(d.now() / 1000) + ' '.repeat(h).replace(/./g, () => s(m.random() * h));

const JwtSecret = 'very secret secret';


let personalsettings = [
    
    {
        "id": "1",
        "name": "Thorsten",
        "surname": "Heißhunger",
        "height": "175",
        "weight": "85",
    }
];

export default class Personalsettings	 {

    constructor(){

    }

    static getMoviesAsync () {
        return new Promise((resolve, reject) => {
            // We call resolve(...) when what we were doing made async successful, and reject(...) when it failed.
            // In this example, we use setTimeout(...) to simulate async code.
            // In reality, you will probably be using something like XHR or an HTML5 API.
            setTimeout(function(){
                let response = { data: movies.map((movie) => { return {id: movie.id, title: movie.title}}) };
                resolve(response); // Yay! Everything went well!
            }, 250);
        });

    };


    static getPersonalSettingByIdAsync (id) {
        return new Promise((resolve, reject) => {
            // We call resolve(...) when what we were doing made async successful, and reject(...) when it failed.
            // In this example, we use setTimeout(...) to simulate async code.
            // In reality, you will probably be using something like XHR or an HTML5 API.
            setTimeout(function(){

                let personalsetting = {};
                let personalsettingsIndex = personalsettings.map(personalsetting => personalsetting['id']).indexOf(id);
                if (personalsettingsIndex > -1) personalsetting = personalsettings[personalsettingsIndex];

                let response = { data: Object.assign({},personalsetting)};
                console.log(response);
                resolve(response); // Yay! Everything went well!
            }, 2500);
        });

    };





    static isAuthenticated(token) {
        if (!token) {
            return false;
        }

        // verifies secret and checks exp
        try {
            var decoded = jwt.verify(token, JwtSecret);
            if(decoded != undefined) {
                return true;
            }
            return false;
        }
        catch(err) {
            return false;
        }
    };
}