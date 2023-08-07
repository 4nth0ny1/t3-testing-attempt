import { render, screen, waitFor } from "@testing-library/react";
import { TodoList } from "../src/components/TodoList";
import { useGetAllTodos } from "../src/hooks/useGetAllTodos";
import { TRPCWrapper } from "~/utils/wrappers/trpcwrapper";

const setup = () => {
  render(<TodoList />, {
    wrapper: TRPCWrapper,
  });
};

jest.mock("../src/hooks/useGetAllTodos", () => ({
  useGetAllTodos: jest.fn(),
}));

describe("TodoList Component", () => {
  it("TodoList - should load TodoList if isSuccess = true", async () => {
    useGetAllTodos.mockImplementation(() => ({
      isSuccess: true,
    }));
    setup();
    const todoList = screen.getByTestId(/TodoList/i);
    expect(todoList).toBeInTheDocument();
  });

  it("TodoList - should show loading message if isLoading is true", async () => {
    useGetAllTodos.mockImplementation(() => ({
      isLoading: true,
    }));
    setup();
    const helpful = screen.getByText(/create your first todo/i);
    expect(helpful).toBeInTheDocument();
  });
});
