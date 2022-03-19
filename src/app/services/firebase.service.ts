import { Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData, DocumentData,
  DocumentReference, Firestore,
  query, setDoc, updateDoc,
  where
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private firestore: Firestore
  ) { }

  public getItemDoc(id: string): DocumentReference<DocumentData> {
    return doc(this.firestore, 'items', id)
  }

  public getItems(): Observable<any[]> {
    const _collection = collection(this.firestore, 'items');
    return collectionData(_collection);
  }

  public getItem(id: string): Observable<any> {
    const _doc = doc(this.firestore, 'items', id);
    return docData(_doc);
  }

  public queryItems(name: string) {
    const _collection = collection(this.firestore, 'items');
    const _query = query(_collection, where('name', '==', name));
    return collectionData(_query);
  }

  public createItem(_doc: DocumentReference<DocumentData>, name: string) {
    setDoc(_doc, { name: name });
  }

  public updateItem(_doc: DocumentReference<DocumentData>, name: string) {
    updateDoc(_doc, { name: name })
  }

  public deleteItem(_doc: DocumentReference<DocumentData>) {
    deleteDoc(_doc);
  }

}
