import { sortedListOfPosts, unsortedListOfPosts } from '../__mocks__/sort-posts.mock';
import { sortPostsByLikesDesc } from './sort-posts';

describe('SortPosts', () => {
  describe('sortPostsByLikesDesc', () => {
    it('should sort posts by likes in descending order', () => {
      const input = unsortedListOfPosts;
      const expected = sortedListOfPosts;
      const actual = sortPostsByLikesDesc(input);

      expect(expected).toEqual(actual);
    });
  });
});
