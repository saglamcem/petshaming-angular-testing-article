import { Component } from '@angular/core';
import { PostService } from './services/post.service';
import { Observable } from 'rxjs';
import { PetPost } from './models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly posts$: Observable<PetPost[]> = this.postService.getPetPostsSortedByLikes('api/pets/whatever');

  constructor(private readonly postService: PostService) {}
}
