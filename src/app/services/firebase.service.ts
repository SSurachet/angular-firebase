import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private firestore: Firestore
  ) { }

  public getItems(): Observable<any[]> {
    const collections = collection(this.firestore, 'items');
    return collectionData(collections);
  }
}
