import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, of } from 'rxjs';
import { Contact } from '../models/Contact';
import { ɵBROWSER_SANITIZATION_PROVIDERS } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { 
    axios.defaults.baseURL = "https://reqres.in/api";
   }

   obtainAllContacts(page?:string):Observable<Contact[]>{
     let url = '/users'

     if(page){
       url = url.concat('?page=').concat(page)
     }

     let observable = Observable.create( (observer) => {
       axios.get(url)
        .then( ( response ) => {
          observer.next (response.data.data);
          observer.complete();
        })
        .catch( ( error ) => {
          observer.error(error);
        });
     }
     );
     return observable;
   }

   obtainContactDetail(id:string):Observable<Contact>{
      let observable = Observable.create((observer)=>{
        axios.get(`/users/${id}`)
          .then((response)=>{
            observer.next(response.data.data);
            observer.complete()
          })
          .catch((error)=>{
            observer.error(error)
          })
      })
      return observable;
   }
}
