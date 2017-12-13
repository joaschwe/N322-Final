import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import {Observable} from "rxjs/Observable";

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

export interface Item {
    id?: string;
    avatarImg: string;
    itemDescription: string;
    itemImg: string;
    itemName: string;
}


@Injectable()
export class DataProvider {

    itemsListRef:AngularFirestoreCollection<Item>;
    itemList: Observable<Item[]>;


    constructor(private afs: AngularFirestore) {
        this.itemsListRef = this.afs.collection<Item>('Cards');
        // this.itemList = this.itemsListRef.valueChanges();
        this.itemList = this.itemsListRef.snapshotChanges().map(actions => {
            return actions.map(action => {
                const data = action.payload.doc.data() as Item;
                const id = action.payload.doc.id; return {
                    id, ...data
                };
            });
        });


        console.log('Hello DataProvider Provider');
    }

    updateItemDescription(itemID, newDesc):void {
        this.itemsListRef.doc(itemID).update({"itemDesc":newDesc});
    }

    deleteListing(itemID):void {
        this.itemsListRef.doc(itemID).delete();
    }

    addNewItem(itemInfo):void {
        if(itemInfo) {
            this.itemsListRef.add(itemInfo);
        }
    }


}