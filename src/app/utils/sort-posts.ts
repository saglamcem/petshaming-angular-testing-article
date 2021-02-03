import { PetPost } from '../models/post.model';

export function sortPostsByLikesDesc(posts: PetPost[]): PetPost[] {
  return [...posts].sort((p1: PetPost, p2: PetPost) => {
    return p2.numberOfLikes - p1.numberOfLikes;
  });
}
