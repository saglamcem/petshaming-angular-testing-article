import { PetPost } from '../models/post.model';

export const postWithManyLikes: PetPost = {
  name: 'Hodor',
  numberOfLikes: 123,
  imageUrl: '',
  isLiked: true,
  quote: ''
};

export const summaryOfPostWithManyLikes = 'Hodor (123 many likes)';

export const postWithOneLike: PetPost = {
  name: 'Bran Stark',
  numberOfLikes: 1,
  imageUrl: '',
  isLiked: true,
  quote: ''
};

export const summaryOfPostWithOneLike = 'Bran Stark (1 like)';

export const postWithNoLikes: PetPost = {
  name: 'Joffrey',
  numberOfLikes: 0,
  imageUrl: '',
  isLiked: false,
  quote: ''
};

export const summaryOfPostWithNoLikes = 'Joffrey (No likes yet)';
