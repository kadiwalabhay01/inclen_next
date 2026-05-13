export interface Event {
  id: string;
  title: string;
  slug: string;
  content: string;
  author: string;
  image: string;
  start_time: string;
  end_time: string;
  created_at: string;
  updated_at: string;
  purpose: string;
  pdf?: string;
}