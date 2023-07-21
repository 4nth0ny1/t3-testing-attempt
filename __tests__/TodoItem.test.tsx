import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TodoItem } from "../src/components/TodoItem";
import type { Todo } from "../src/types";

interface TodoProps {
  todo: Todo;
}

describe("TodoItem Component", () => {
  it("checkbox - should render a checkbox", () => {
    const todo = [];
    render(<TodoItem todo={todo} />);
    const checkbox = screen.getByTestId("doneCheckbox");
    expect(checkbox).toBeInTheDocument();
  });

  it("content - should render content from props", () => {
    const todo = [
      {
        id: "1",
        content: "mow the lawn",
        done: false,
        createdAt: Date(),
        updatedAt: Date(),
        userId: "user1",
      },
    ];
    render(<TodoItem todo={todo} />);
    const content = screen.getByTestId("content");
    expect(content).toBeInTheDocument();
  });

  it("editButton - should render edit button", () => {
    const todo = [
      {
        id: "1",
        content: "mow the lawn",
        done: false,
        createdAt: Date(),
        updatedAt: Date(),
        userId: "user1",
      },
    ];
    render(<TodoItem todo={todo} />);
    const editButton = screen.getByTestId("editButton");
    expect(editButton).toBeInTheDocument();
  });

  it("deleteButton - should render delete button", () => {
    const todo = [
      {
        id: "1",
        content: "mow the lawn",
        done: false,
        createdAt: Date(),
        updatedAt: Date(),
        userId: "user1",
      },
    ];
    render(<TodoItem todo={todo} />);
    const deleteButton = screen.getByTestId("deleteButton");
    expect(deleteButton).toBeInTheDocument();
  });

  xit("deleteMutation - clicking deleteButton should delete todo from page", async () => {
    const todo = [
      {
        id: "1",
        content: "mow the lawn",
        done: false,
        createdAt: Date(),
        updatedAt: Date(),
        userId: "user1",
      },
    ];

    const deleteMutation = jest.fn();

    render(<TodoItem todo={todo} />);
    const deleteButton = screen.getByTestId("deleteButton");

    await userEvent.click(deleteButton);

    expect(deleteMutation).toHaveBeenCalled();
  });
});
