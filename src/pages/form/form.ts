import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController} from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";


// import { FormBuilder, FormGroup } from '@angular/forms';

// NavParams

/**
 * Generated class for the FormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage {

    // list : FormGroup;

    items:any;

    constructor(public navCtrl: NavController, public dataService:DataProvider, public alertCtrl: AlertController) {

        this.items = this.dataService.itemList;

        // this.list = this.dataService.itemList;


        //
        // this.formGroup = this.formBuilder.group({
        //     description: [''],
        // });

    }




  addListing():void {
      this.dataService.addNewItem(id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormPage');
  }






    // addListing():void {
    //     let prompt = this.alertCtrl.create({
    //         title: 'Add Home',
    //         message: "Itemerty Listing",
    //         inputs: [
    //             {
    //                 name: 'itemName',
    //                 placeholder: 'Home Location'
    //             },
    //             {
    //                 name: 'itemDesc',
    //                 placeholder: 'Home Description'
    //             },
    //             {
    //                 name: 'itemImg',
    //                 placeholder: 'Image URL of home'
    //             },
    //             {
    //                 name: 'avatarImg',
    //                 placeholder: 'Add realtor image'
    //             },
    //
    //         ],
    //         buttons: [
    //             {
    //                 text: 'Cancel',
    //                 handler: data => {
    //                     console.log('Cancel clicked');
    //                 }
    //             },
    //             {
    //                 text: 'Save',
    //                 handler: data => {
    //                     let today = new Date();
    //                     data['date'] = (today.getMonth()+1) + '-' + today.getDate() + '-' + today.getFullYear();
    //                     console.log(new Date().toString());
    //                     this.dataService.addNewItem(data);
    //                     console.log('Saved clicked' + data.itemImg);
    //                 }
    //             }
    //         ]
    //     });
    //     prompt.present();
    // }








}
