import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Observable, of } from 'rxjs';
import { PetPost } from '../models/post.model';
import { catchError, map } from 'rxjs/operators';
import { sortPostsByLikesDesc } from '../utils/sort-posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private readonly dataService: DataService) {}

  getPetPosts(path: string): Observable<PetPost[]> {
    return this.dataService.get(path)
      .pipe(
        catchError(err => of([]))
      );
  }

  getPetPostsSortedByLikes(path: string): Observable<PetPost[]> {
    return this.getPetPosts(path)
      .pipe(
        map(posts => sortPostsByLikesDesc(posts))
      );
  }
}
