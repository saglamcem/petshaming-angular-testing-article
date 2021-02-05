import { Pipe, PipeTransform } from '@angular/core';
import { PetPost } from '../models/post.model';

@Pipe({
  name: 'postSummary'
})
export class PostSummaryPipe implements PipeTransform {
  transform(petPost: PetPost): string {
    if (!petPost || petPost.numberOfLikes == null) return '';

    if (petPost.numberOfLikes === 0) return `${petPost.name} (No likes yet)`;
    if (petPost.numberOfLikes === 1) return `${petPost.name} (1 like)`;
    return `${petPost.name} (${petPost.numberOfLikes} many likes)`;
  }
}
