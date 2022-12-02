import { Component, OnInit } from '@angular/core';
import { getUsers } from '../post.service';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users!: User[];
  ids!: number;

  constructor() {
    getUsers().then((users) => {
      this.users = users;
  });
  }

  ngOnInit(): void {
    this.ids = Number(window.location.href.at(-1)) - 1;
  }
  selectedUser = (el:any) => {
    let lista: any = document.getElementById(el)
    lista.classList.add("selezionato");
    if(el != this.users[el - 1].id) {
        lista.classList.remove("selezionato");
    };
}

}
