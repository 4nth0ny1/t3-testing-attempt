import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoItem from "../src/components/TodoItem";

describe("TodoItem Component", () => {
  it("checkbox - should render a checkbox", () => {
    render(<TodoItem id="1" content="mow the lawn" done={false} />);
    const checkbox = screen.getByTestId(/doneCheckbox/i);
    expect(checkbox).toBeInTheDocument();
  });

  it("checkbox - should be checked when it is clicked", async () => {
    render(<TodoItem id="1" content="mow the lawn" done={false} />);
    const checkbox = screen.getByTestId(/doneCheckbox/i);
    expect(checkbox).not.toBeChecked();
    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it("content - should render content from props", () => {
    render(<TodoItem id="1" content="mow the lawn" done={false} />);
    const content = screen.getByTestId(/content/i);
    expect(content).toBeInTheDocument();
  });
});
