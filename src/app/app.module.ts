import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { PostSummaryPipe } from './pipes/post-summary.pipe';
import { PostComponent } from './components/post/post.component';
import { NoPostsFoundComponent } from './components/no-posts-found/no-posts-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PostSummaryPipe,
    PostComponent,
    NoPostsFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
