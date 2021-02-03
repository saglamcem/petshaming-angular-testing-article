export type Pet = {
  name: string;
  imageUrl?: string;
};

export type Post = {
  quote: string;
  numberOfLikes: number;
  isLiked: boolean;
};

export type PetPost = Pet & Post;
