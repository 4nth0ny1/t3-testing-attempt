import TodoItem from "./TodoItem";

export default function TodoList() {
  return (
    <div>
      <TodoItem id="1" content="mow the lawn" done={true} />
    </div>
  );
}
