import ApplicationController from '../../../../../javascript/controllers/application_controller'




//import {Controller} from "stimulus"
//import consumer from "channels/consumer";


export default class extends ApplicationController {






    connect() {
        super.connect()

        console.log("test")
    }
    acor() {
        const button = document.querySelector('#menu-button');
        const menu = document.querySelector('#menu');


        button.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }




}