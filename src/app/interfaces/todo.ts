export interface Todo {
  title: string;
  description: string;
  priority: string;
  color: string;
  completed: boolean;
  id: number;
}

export interface Selector {
  name: string;
  field: string;
  filterValue: boolean | string;
}