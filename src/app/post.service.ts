import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = []

  constructor() {}

  getAllPosts() {
    return fetch("http://localhost:3000/posts/").then((res): Promise<Post[]> => res.json())
  }

  elimina(id: number) {
    return fetch("http://localhost:3000/posts/"+id, {
      method:"DELETE"
    }).then(res=>{
      if(res.ok){
        this.posts = this.posts.filter(e=>e.id!=id)
      }
      return res
    })
  }

  //fornisce i dati al service
  fetchData() {
    let p = this.getAllPosts()
    p.then(res => {
      this.posts = res
    })
  }

  getPostFiltrati(a: boolean): Post[] {
    let newArray = this.posts.filter((e) => {
      return e.active == a
    })
    return newArray
  }

  togglePost(id:number){
    let postDaArray = this.posts.find(e=>e.id == id)
    if(postDaArray == undefined) {
      throw new Error("Post non trovato")
    }
    let post = {...postDaArray, active: !postDaArray.active}

    //toggle sul db
    return fetch("http://localhost:3000/posts/"+id, {
      method:"PUT",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(post)
    }).then(res=>{
      if(res.ok){
        //toggle sul service
        postDaArray!.active = !postDaArray!.active
      }
      return res
    })

  }

}
export async function getPosts() {
  return await (await fetch("http://localhost:3000/posts/")).json()
}
export async function getUsers() {
  return await (await fetch("http://localhost:3000/utenti/")).json()
}




