export interface Todo {
  title: string;
  description: string;
  priority: number;
  color: string;
  completed: boolean;
  id: number;
}

export interface Selector {
  name: string;
  field: string;
  filterValue: boolean | null;
}