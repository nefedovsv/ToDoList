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
  field: keyof Todo;
  filterValue: boolean | string;
}