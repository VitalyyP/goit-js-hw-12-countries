export interface ITodo {
  title: string;
  id: number;
  completed: boolean;
}

export interface ITodoForm {
  onAdd(title: string): void;
}

export interface ITodoList {
  todos: ITodo[];
  onToggle(id: number): void;
  onRemove(id: number): void;
}
