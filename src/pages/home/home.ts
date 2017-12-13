import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController} from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    items:any;

    constructor(public navCtrl: NavController, public dataService:DataProvider, public alertCtrl: AlertController) {

        this.items = this.dataService.itemList;
    }

    updateListingDesc(item):void {
        let prompt = this.alertCtrl.create({
            title: 'Edit Item Description',
            message: "Enter new description below",
            inputs: [
                {
                    name: 'itemDesc',
                    value: item.itemDesc
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: data => {
                        this.dataService.updateItemDescription(item.id, data.itemDesc);
                    }
                }
            ]
        });
        prompt.present();
    }

    deleteListing(id):void {
        this.dataService.deleteListing(id);
    }

    addListing():void {
        let prompt = this.alertCtrl.create({
            title: 'Add Item',
            inputs: [
                {
                    name: 'itemName',
                    placeholder: 'Item Name'
                },
                {
                    name: 'itemDesc',
                    placeholder: 'Item Description'
                },
                {
                    name: 'itemImg',
                    placeholder: 'Image URL of item'
                },
                {
                    name: 'avatarImg',
                    placeholder: 'Add image of child'
                },

            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: data => {
                    //     let today = new Date();
                    //     data['date'] = (today.getMonth()+1) + '-' + today.getDate() + '-' + today.getFullYear();
                    //     console.log(new Date().toString());
                        this.dataService.addNewitem(data);
                        console.log('Saved clicked' + data.itemImg);
                    }
                }
            ]
        });
        prompt.present();
    }


    goToList():void {
        this.navCtrl.push('HomePage');
    }

    goToCreate() {
        this.navCtrl.push('FormPage');
    }

}