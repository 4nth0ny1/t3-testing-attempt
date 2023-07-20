import { useState } from "react";

interface TodoProps {
  id: string;
  content: string;
  done: boolean;
}

export default function TodoItem({ id, content, done }: TodoProps) {
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
