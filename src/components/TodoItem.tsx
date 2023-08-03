import { useState } from "react";
import type { Todo } from "../types";
import { api } from "../utils/api";

interface TodoProps {
  id: string;
  content: string;
  done: boolean;
}

export function TodoItem({ id, content, done }: TodoProps) {
  const [checked, setChecked] = useState(done);

  const ctx = api.useContext();

  const { mutate: deleteMutation } = api.todo.delete.useMutation({
    onSettled: async () => {
      await ctx.todo.getAll.invalidate();
    },
  });

  return (
    <div className="flex flex-row justify-between gap-4 pb-2">
      <input
        type="checkbox"
        checked={checked}
        data-testid="doneCheckbox"
        onChange={(e) => setChecked(e.target.checked)}
      />
      <p data-testid="content">{content}</p>
      <div className="flex flex-row gap-4">
        <button
          onClick={() => deleteMutation(id)}
          data-testid="deleteButton"
          className="rounded-xl bg-red-400 px-4"
        >
          del
        </button>
      </div>
    </div>
  );
}
