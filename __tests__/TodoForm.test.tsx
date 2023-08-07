import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TodoForm } from "../src/components/TodoForm";
import { TRPCWrapper } from "~/utils/wrappers/trpcwrapper";
const func = jest.fn();

const setup = () => {
  render(
    <TodoForm setContent={func} content={"hello"} formSubmission={func} />,
    {
      wrapper: TRPCWrapper,
    }
  );
};

describe("TodoForm Component", () => {
  it("should render an input box and create button", () => {
    setup();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("createMutation - clicking createButton should do a callback", async () => {
    setup();

    const createButton = screen.getByRole("button");
    expect(createButton).toBeInTheDocument();

    await userEvent.click(createButton);

    await waitFor(() => {
      expect(func).toHaveBeenCalled();
    });
  });
});
