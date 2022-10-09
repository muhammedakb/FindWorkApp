type Location = {
  name: string;
};

type Category = {
  name: string;
};

type Level = {
  name: string;
  short_name: string;
};

type Refs = {
  landing_page: string;
};

type Company = {
  id: number;
  short_name: string;
  name: string;
};

type Aggregations = {};

export type JobType = {
  contents: string;
  name: string;
  type: string;
  publication_date: Date;
  short_name: string;
  model_type: string;
  id: number;
  locations: Location[];
  categories: Category[];
  levels: Level[];
  tags: any[];
  refs: Refs;
  company: Company;
};

export type JobsPage = {
  page: number;
  page_count: number;
  items_per_page: number;
  took: number;
  timed_out: boolean;
  total: number;
  results: JobType[];
  aggregations: Aggregations;
};
