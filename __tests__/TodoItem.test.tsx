import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TodoItem } from "../src/components/TodoItem";
import { TRPCWrapper } from "~/utils/wrappers/trpcwrapper";
const func = jest.fn();

const setup = () => {
  render(
    <TodoItem id="1" done={false} content="mow the lawn" onDelete={func} />,
    {
      wrapper: TRPCWrapper,
    }
  );
};

describe("TodoItem Component", () => {
  it("checkbox - should render a checkbox", () => {
    setup();
    const checkbox = screen.getByTestId("doneCheckbox");
    expect(checkbox).toBeInTheDocument();
  });

  it("content - should render content from props", () => {
    setup();

    const content = screen.getByText("mow the lawn");
    expect(content).toBeInTheDocument();
  });

  it("deleteButton - should render delete button", () => {
    setup();
    const deleteButton = screen.getByTestId("deleteButton");
    expect(deleteButton).toBeInTheDocument();
  });

  it("deleteMutation - clicking deleteButton should do a callback", async () => {
    setup();
    const content = screen.getByText("mow the lawn");
    expect(content).toBeInTheDocument();

    const deleteButton = screen.getByTestId("deleteButton");
    expect(deleteButton).toBeInTheDocument();

    await userEvent.click(screen.getByText("del"));

    await waitFor(() => {
      expect(func).toHaveBeenCalled();
    });
  });
});
