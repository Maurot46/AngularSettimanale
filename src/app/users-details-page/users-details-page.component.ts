import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { getUsers } from '../post.service';

@Component({
  selector: 'app-users-details-page',
  templateUrl: './users-details-page.component.html',
  styleUrls: ['./users-details-page.component.scss']
})
export class UsersDetailsPageComponent implements OnInit {
  ids!: number;
  email!: string
  name!: string
  ruolo!: string
  users!: User[]
  user!: User
  constructor(private ar: ActivatedRoute) { }

  ngOnInit(): void {
  }
  selectedUser = (el:any) =>  {
    this.ids =  Number(window.location.href.at(1));
      this.ar.params.subscribe((e) => {
      getUsers().then((users) => {
        this.ids = +e["id"];
        this.user = users[this.ids];
        this.name = JSON.stringify(users[this.ids].name);
        this.email = JSON.stringify(users[this.ids].email);
        this.ruolo = JSON.stringify(users[this.ids].ruolo);
      })
  })
  }
}
