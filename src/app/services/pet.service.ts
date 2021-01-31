import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Observable, of } from 'rxjs';
import { PetPost } from '../models/pet.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  constructor(private readonly dataService: DataService) {}

  getPetPosts(path: string): Observable<PetPost[]> {
    return this.dataService.get(path)
      .pipe(
        catchError(err => of([]))
      );
  }
}
