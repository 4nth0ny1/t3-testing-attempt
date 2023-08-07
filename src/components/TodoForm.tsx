type SubmitProps = {
  setContent: (content: string) => void;
  content: string;
  formSubmission: (content: string) => void;
};

export function TodoForm({ formSubmission, setContent, content }: SubmitProps) {
  return (
    <div
      data-testid="TodoForm"
      className="mb-4 flex w-full flex-row justify-between border-b border-slate-900 pb-2"
    >
      <input
        type="text"
        placeholder="content"
        className="mr-2 w-full rounded-xl border border-slate-900 p-2"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        onClick={() => formSubmission(content)}
        className="rounded-xl bg-green-400 px-4"
      >
        create
      </button>
    </div>
  );
}
