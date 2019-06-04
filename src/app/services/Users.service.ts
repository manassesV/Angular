import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { collectExternalReferences } from '@angular/compiler';
import uuid from 'uuid'

@Injectable({ providedIn: 'root'})
export class UserService {
    constructor(
        private http: HttpClient,
        private db: AngularFirestore){}

    private loading: Boolean = false
    

   getById(id: string){
       return this.db.collection('users', ref => ref.where('id', '==', id))
   }


    create(data){
       return this.db.collection('users').add({
        id:uuid(),   
        ...data})
    };
}