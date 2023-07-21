import { useState } from "react";
import type { Todo } from "../types";

interface TodoProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoProps) {
  const { content, done } = todo;
  const [checked, setChecked] = useState(done);
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
          data-testid="editButton"
          className="rounded-xl bg-yellow-400 px-4"
        >
          edit
        </button>
        <button
          data-testid="deleteButton"
          className="rounded-xl bg-red-400 px-4"
        >
          del
        </button>
      </div>
    </div>
  );
}
