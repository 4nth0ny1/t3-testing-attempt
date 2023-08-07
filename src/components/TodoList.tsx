import { useGetAllTodos } from "~/hooks/useGetAllTodos";
import { api } from "../utils/api";
import { TodoItem } from "./TodoItem";
import ClipLoader from "react-spinners/ClipLoader";
import { CSSProperties } from "react";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "black",
};

export function TodoList() {
  const { data: todos, isLoading, isError } = useGetAllTodos();

  const ctx = api.useContext();

  const { mutate: deleteMutation } = api.todo.delete.useMutation({
    onSettled: async () => {
      await ctx.todo.getAll.invalidate();
    },
  });

  return (
    <div data-testid="TodoList" className="w-1/2 p-10">
      {!isLoading ? (
        todos?.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              id={todo.id}
              content={todo.content}
              done={todo.done}
              onDelete={deleteMutation}
            />
          );
        })
      ) : (
        <ClipLoader
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
    </div>
  );
}
