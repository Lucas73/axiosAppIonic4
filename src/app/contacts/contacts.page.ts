import { Contact } from './../models/Contact';
import { ContactsService } from './../services/contacts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  contacts:Contact[] = [];
  searching:boolean = true;

  constructor(private contactsService:ContactsService) {}

  async ngOnInit() {
    await this.contactsService.obtainAllContacts().subscribe(
      response =>{
        this.contacts = response
        this.searching = false
      }
    )
  }
  obtainMoreContacts(){
    this.searching = true;
    let randomNumber:string = String(Math.floor(Math.random() * 4) + 1);

    this.contactsService.obtainAllContacts(randomNumber).subscribe(
      response => {
        this.contacts = response;
        this. searching = false;
      }
    )
  }
}
