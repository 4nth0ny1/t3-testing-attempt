import { useState } from "react";
import type { Todo } from "../types";

interface TodoProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoProps) {
  const { content, done } = todo;
  const [checked, setChecked] = useState(done);
  return (
    <div className="flex flex-row gap-4">
      <input
        type="checkbox"
        checked={checked}
        data-testid="doneCheckbox"
        onChange={(e) => setChecked(e.target.checked)}
      />
      <p data-testid="content">{content}</p>
    </div>
  );
}
