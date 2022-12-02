import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostAttiviComponent } from './post-attivi/post-attivi.component';
import { PostDetailsPageComponent } from './post-details-page/post-details-page.component';
import { PostInattiviComponent } from './post-inattivi/post-inattivi.component';
import { PostComponent } from './post/post.component';
import { UsersDetailsPageComponent } from './users-details-page/users-details-page.component';
import { UsersComponent } from './users/users.component';

const routes: Route[] = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "post",
    component: PostComponent
  },
  {
    path: "post/attivi",
    component: PostAttiviComponent
  },
  {
    path: "post/inattivi",
    component: PostInattiviComponent
  },
  {
    path: "post/inattivi/:id",
    component: PostDetailsPageComponent
  },
  {
    path: "post/attivi/:id",
    component: PostDetailsPageComponent
  },
  {
    path: "users",
    component: UsersComponent,
    children: [
      {
        path:':id',
        component: UsersDetailsPageComponent
      }
    ]
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
