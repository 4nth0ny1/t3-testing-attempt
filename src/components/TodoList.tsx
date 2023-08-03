import { api } from "../utils/api";
import { TodoItem } from "./TodoItem";
import { TodoForm } from "./TodoForm";

export function TodoList() {
  const { data: todos, isLoading, isError } = api.todo.getAll.useQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something went wrong...</div>;

  return (
    <div data-testid="TodoList" className="w-1/2 p-10">
      <TodoForm />
      {todos.length ? (
        todos?.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              id={todo.id}
              content={todo.content}
              done={todo.done}
            />
          );
        })
      ) : (
        <div className="py-4 text-center text-xl">Create your first todo</div>
      )}
    </div>
  );
}
