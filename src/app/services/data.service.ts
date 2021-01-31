import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PetPost } from '../models/pet.model';
import { petPostsData } from './pet-posts.data';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // only here to demonstrate test case
  constructor(private readonly http: HttpClient) {}

  get(path: string): Observable<PetPost[]> {
    return of(petPostsData)
      .pipe(
        delay(500)
      );
  }
}
