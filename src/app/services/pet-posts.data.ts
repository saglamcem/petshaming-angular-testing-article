import { PetPost } from '../models/pet.model';

export const petPostsData: PetPost[] = [
  {
    name: 'Homer',
    quote: `I tore open the cat nip and now I'm too stoned to move ...`,
    numberOfLikes: 2374,
    imageUrl: `https://static.boredpanda.com/blog/wp-content/uploads/2015/03/cat-shaming-16__605.jpg`
  },
  {
    name: 'Bart',
    quote: 'I watched a mouse eat my food and did nothing',
    numberOfLikes: 23,
    imageUrl: 'https://static.boredpanda.com/blog/wp-content/uploads/2015/03/cat-shaming-3__605.jpg'
  },
  {
    name: 'Abed',
    quote: `I poop at the bottom of the kids' slide.`,
    numberOfLikes: 374,
    imageUrl: 'https://barkpost-assets.s3.amazonaws.com/wp-content/uploads/2013/10/Screen-Shot-2013-10-02-at-1.41.48-PM.png'
  },
  {
    name: 'Troy',
    quote: 'Peed on Yoda I did',
    numberOfLikes: 0,
    imageUrl: 'https://barkpost-assets.s3.amazonaws.com/wp-content/uploads/2013/10/Screen-Shot-2013-10-02-at-1.18.23-PM.png'
  },
  {
    name: 'Steve',
    quote: 'I stole a baby doll from a six-year-old and ripped its head off!',
    numberOfLikes: 1,
    imageUrl: 'https://barkpost-assets.s3.amazonaws.com/wp-content/uploads/2013/10/dog-shaming-11.jpg'
  }
];
