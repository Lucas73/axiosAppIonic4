
export class Contact{
  id: number;
  firstName: string;
  lastName: string;
  avatar: string;

  constructor(id, firstName, lastName, avatar){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
  }
}