import { PostSummaryPipe } from './post-summary.pipe';
import { PetPost } from '../models/post.model';
import {
  postWithManyLikes,
  postWithNoLikes,
  postWithOneLike,
  summaryOfPostWithManyLikes,
  summaryOfPostWithNoLikes,
  summaryOfPostWithOneLike
} from '../__mocks__/posts.mock';

const getAnythingAsPetPost = (anything: any): PetPost => (anything as unknown) as PetPost;

describe('PostSummaryPipe', () => {
  const pipe = new PostSummaryPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return an empty string if the post object is falsy', () => {
    // Since the transform method takes in a PetPost type object,
    // Typescript doesn't allow us to pass it in here (which is great).
    // But for the sake of testing, let's say "bugs will find a way"
    // (xyz as unknown as PetPost) allows us to make a normally impossible conversion
    const inputNull = getAnythingAsPetPost(null);
    const inputUndefined = getAnythingAsPetPost(undefined);
    const inputFalse = getAnythingAsPetPost(false);
    const inputBadNumberOfLikes = getAnythingAsPetPost({
      name: 'Mock name',
      numberOfLikes: null,
      quote: 'Mock quote',
      imageUrl: 'Mock url',
      isLiked: true
    });

    const expected = '';

    expect(pipe.transform(inputNull)).toEqual(expected);
    expect(pipe.transform(inputUndefined)).toEqual(expected);
    expect(pipe.transform(inputFalse)).toEqual(expected);
    expect(pipe.transform(inputBadNumberOfLikes)).toEqual(expected);
  });

  it('should return summary with format "Name (x many likes)" for posts with many likes', () => {
    const input = postWithManyLikes;
    const expected = summaryOfPostWithManyLikes;
    expect(pipe.transform(input)).toEqual(expected);
  });

  it('should return summary with format "Name (1 like)" for posts with only one like', () => {
    const input = postWithOneLike;
    const expected = summaryOfPostWithOneLike;
    expect(pipe.transform(input)).toEqual(expected);
  });

  it('should return summary with format "Name (No likes yet)" for posts with no likes', () => {
    const input = postWithNoLikes;
    const expected = summaryOfPostWithNoLikes;
    expect(pipe.transform(input)).toEqual(expected);
  });
});
