import { Contact } from './../models/Contact';
import { ContactsService } from './../services/contacts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  idContact:string;
  contact:Contact;
  searching:boolean = true;

  constructor(private route:ActivatedRoute, 
              private contactsService:ContactsService) { }

  async ngOnInit() {
    await this.route.params.subscribe(
      data => {
        this.idContact = data.id
      })
    await this.contactsService.obtainContactDetail(this.idContact).subscribe(
      response => {
        this.contact = response;
        this. searching = false;
      }
    )
  }

}
