import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable, map } from 'rxjs';
import {ListItem, List } from '../interface/class.interface';


@Injectable({
  providedIn: 'root'
})
export class ListService {
  private list: BehaviorSubject<List> = new BehaviorSubject<List>({items: [
      {
        src: '../../',
        name: "Zumba",
        date: "Jueves",
        time: 16,
        id: 1,
      }
    ]
  });
  constructor(private _snackBar : MatSnackBar) { }

  

  getListItems():Observable<ListItem[]>{
    return this.list.asObservable().pipe(
      map(list => list.items) // Assuming 'list' contains 'items' array
    );
  }

  getList(): List {
    return this.list.getValue();
  }
  
  // Function to search for an item by ID
  findItemById(itemId: number): ListItem | undefined {
    const cart = this.getList();
    return cart.items.find(item => item.id === itemId);
  }

  
  /*
  find(_item:number){
      
  }
  */
}
