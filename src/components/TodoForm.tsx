import { api } from "../utils/api";
import { useState } from "react";

export function TodoForm() {
  const [content, setContent] = useState("");

  const ctx = api.useContext();

  const { mutate } = api.todo.create.useMutation({
    onSettled: async () => {
      setContent("");
      await ctx.todo.getAll.invalidate();
    },
  });

  return (
    <form
      data-testid="TodoForm"
      className="mb-4 flex w-full flex-row justify-between border-b border-slate-900 pb-2"
      onSubmit={(e) => {
        e.preventDefault();
        mutate(content);
      }}
    >
      <input
        type="text"
        placeholder="content"
        className="mr-2 w-full rounded-xl border border-slate-900 p-2"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="rounded-xl bg-green-400 px-4">create</button>
    </form>
  );
}
