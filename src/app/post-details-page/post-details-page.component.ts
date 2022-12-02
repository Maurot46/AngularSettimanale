import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post';
import { getPosts } from '../post.service';

@Component({
  selector: 'app-post-details-page',
  templateUrl: './post-details-page.component.html',
  styleUrls: ['./post-details-page.component.scss']
})
export class PostDetailsPageComponent implements OnInit {
  title!: string;
  body!: string;
  type!: string;
  author!: string
  ids!: number;
  posts!: Post[];
  post!: Post;
  constructor(private ar: ActivatedRoute) { }
  ngOnInit(): void {
    this.ids = Number(window.location.href.at(1));
    let id = +this.ar.snapshot.params['id']
    console.log(id);
    this.ar.params.subscribe((e) => {
        this.ids = +e["id"];
        getPosts().then((posts) => {
            this.post = posts[this.ids];
            this.title = JSON.stringify(posts[this.ids].title);
            this.body = JSON.stringify(posts[this.ids].body);
            this.type = JSON.stringify(posts[this.ids].type);
            this.author = JSON.stringify(posts[this.ids].author);
            //problema con selezionamento della pagina specifica attualmente seleziona il post con id successivo a quello cliccato
        });
    })
    //----//
}
}
