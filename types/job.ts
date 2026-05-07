export interface Job {
  id: string;
  title: string;
  keyword: string | null;
  slug: string;
  content: string;
  location: string;
  employment_type: string;
  image: string;
  pdf: string;
  created_at: string;
}