import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from "../src/components/TodoList";

describe("TodoList Component", () => {
  it("should render helpful message if there aren't any todos", () => {
    const todos = [];
    render(<TodoList todos={todos} />);
    const helpfulMessage = screen.getByTestId(/helpfulMessage/i);
    expect(helpfulMessage).toBeInTheDocument();
  });
});
