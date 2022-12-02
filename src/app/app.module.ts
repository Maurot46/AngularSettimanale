import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostAttiviComponent } from './post-attivi/post-attivi.component';
import { PostInattiviComponent } from './post-inattivi/post-inattivi.component';
import { PostComponent } from './post/post.component';
import { PostCardComponent } from './post-card/post-card.component';
import { ColoraDirective } from './directives/colora.directive';
import { PostDetailsPageComponent } from './post-details-page/post-details-page.component';
import { UsersComponent } from './users/users.component';
import { UsersDetailsPageComponent } from './users-details-page/users-details-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostAttiviComponent,
    PostInattiviComponent,
    PostComponent,
    PostCardComponent,
    ColoraDirective,
    PostDetailsPageComponent,
    UsersComponent,
    UsersDetailsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
