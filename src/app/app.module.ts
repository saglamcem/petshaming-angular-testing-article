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
import { GrowOnHoverDirective } from './directives/grow-on-hover.directive';
import { LikeButtonComponent } from './components/like-button/like-button.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PostSummaryPipe,
    PostComponent,
    NoPostsFoundComponent,
    GrowOnHoverDirective,
    LikeButtonComponent,
    HeaderComponent
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
