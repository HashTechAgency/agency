
export interface NewsListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: NewsItem[];
}

export interface CategoryListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Category[];
}

export interface NewsItem {
  id: number;
  category: Category;
  tags: Tag[];
  author: Author;
  created_at: string;
  updated_at: string;
  slug: string;
  name: string;
  image: string;
  description: string;
  views: number;
  is_published: boolean;
}

export interface Category {
  id: number;
  count: number;
  created_at: string;
  updated_at: string;
  name: string;
}

export interface Tag {
  id: number;
  created_at: string;
  updated_at: string;
  name: string;
}

export interface Author {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
}