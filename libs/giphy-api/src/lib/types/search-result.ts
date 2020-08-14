import { GifObject } from './gif-object';

export interface SearchResult {
  data: GifObject[];
  pagination: {
    count: number;
    offset: number;
    total_count: 0;
  };
}
