export type Pet = {
  name: string;
  imageUrl?: string;
};

export type Post = {
  quote: string;
  numberOfLikes: number;
  liked: boolean;
};

export type PetPost = Pet & Post;
