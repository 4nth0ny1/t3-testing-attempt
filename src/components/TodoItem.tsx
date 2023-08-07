import { useState } from "react";
import type { Todo } from "../types";
import { api } from "../utils/api";

interface TodoProps {
  id: string;
  content: string;
  done: boolean;
  onDelete: (id: string) => void;
}

export function TodoItem({ id, content, done, onDelete }: TodoProps) {
  const [checked, setChecked] = useState(done);

  return (
    <div
      data-testid="TodoItem"
      className="flex flex-row justify-between gap-4 pb-2"
    >
      <input
        type="checkbox"
        checked={checked}
        data-testid="doneCheckbox"
        onChange={(e) => setChecked(e.target.checked)}
      />
      <p data-testid="content">{content}</p>
      <div className="flex flex-row gap-4">
        <a
          onClick={() => onDelete(id)}
          data-testid="deleteButton"
          className="cursor-pointer rounded-xl bg-red-400 px-4"
        >
          del
        </a>
      </div>
    </div>
  );
}
