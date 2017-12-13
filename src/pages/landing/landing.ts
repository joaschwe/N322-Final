import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";

/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {

    constructor(public navCtrl: NavController, public dataService:DataProvider) {

    }

    goToList():void {
        this.navCtrl.push('HomePage');
    }

    goToCreate() {
        this.navCtrl.push('FormPage');
    }

}
