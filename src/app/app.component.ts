import { Component } from '@angular/core';
import { PetService } from './services/pet.service';
import { Observable } from 'rxjs';
import { PetPost } from './models/pet.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pet-shaming';

  readonly posts$: Observable<PetPost[]> = this.petService.getPetPosts('api/pets/whatever');

  constructor(private readonly petService: PetService) {}
}
