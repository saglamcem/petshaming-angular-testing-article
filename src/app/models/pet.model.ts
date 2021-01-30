export type Pet = {
  name: string;
  imageUrl?: string;
};

export type Post = {
  quote: string;
  numberOfLikes: number;
};

export type PetPost = Pet & Post;
