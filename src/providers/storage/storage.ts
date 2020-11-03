import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Item {
  id: number,
  name: string,
  email: string,
  mobile: number,
  age: string,
  address: string,
  profile: string,
  nationality: string,
  aadharNumber: number,
  sodowo: string
}

const ITEMS_KEY = 'my-users';

@Injectable()
export class StorageProvider {

  constructor(private storage: Storage) {
    console.log('Hello StorageProvider Provider');
  }

  createUser(item: Item): Promise<any>{
    return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
      if(items){
        items.push(item);
        return this.storage.set(ITEMS_KEY, items);
      }else{
        return this.storage.set(ITEMS_KEY, [item]);
      }
    })
  }

  getUsers(): Promise<Item[]>{
    return this.storage.get(ITEMS_KEY);
  }

  

}
