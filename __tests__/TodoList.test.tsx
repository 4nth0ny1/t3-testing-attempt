import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TodoList } from "../src/components/TodoList";

describe("TodoList Component", () => {
  it("TodoList - should mount", () => {
    render(<TodoList />);
    const todoList = screen.getByTestId(/TodoList/i);
    expect(todoList).toBeInTheDocument();
  });
});
