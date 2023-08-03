import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TodoItem } from "../src/components/TodoItem";
import type { Todo } from "../src/types";
import { TRPCWrapper } from "~/utils/wrappers/trpcwrapper";

interface TodoProps {
  id: string;
  content: string;
  done: boolean;
}

describe("TodoItem Component", () => {
  it("checkbox - should render a checkbox", () => {
    render(<TodoItem id="1" done={false} content="mow the lawn" />, {
      wrapper: TRPCWrapper,
    });
    const checkbox = screen.getByTestId("doneCheckbox");
    expect(checkbox).toBeInTheDocument();
  });

  it("content - should render content from props", () => {
    render(<TodoItem id="1" done={false} content="mow the lawn" />, {
      wrapper: TRPCWrapper,
    });

    const content = screen.getByText("mow the lawn");
    expect(content).toBeInTheDocument();
  });

  it("deleteButton - should render delete button", () => {
    render(<TodoItem id="1" done={false} content="mow the lawn" />, {
      wrapper: TRPCWrapper,
    });
    const deleteButton = screen.getByTestId("deleteButton");
    expect(deleteButton).toBeInTheDocument();
  });

  it("deleteMutation - clicking deleteButton should delete todo from page", async () => {
    render(<TodoItem id="1" done={false} content="mow the lawn" />, {
      wrapper: TRPCWrapper,
    });
    const content = screen.getByText("mow the lawn");
    expect(content).toBeInTheDocument();

    const deleteButton = screen.getByTestId("deleteButton");
    expect(deleteButton).toBeInTheDocument();

    await userEvent.click(deleteButton);

    await waitFor(() => {
      expect(screen.getByText("mow the lawn")).not.toBeInTheDocument();
    });
  });
});
