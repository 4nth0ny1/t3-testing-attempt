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

const mockedUseGetAllTodos = useGetAllTodos as jest.Mock;

describe("TodoList Component", () => {
  it("TodoList - should load TodoList if isSuccess = true", async () => {
    mockedUseGetAllTodos.mockImplementation(() => ({
      isSuccess: true,
    }));
    setup();
    const todoList = screen.getByTestId(/TodoList/i);
    expect(todoList).toBeInTheDocument();
  });

  it("TodoList - should show loading spinner if isLoading is true", async () => {
    mockedUseGetAllTodos.mockImplementation(() => ({
      isLoading: true,
    }));
    setup();
    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();
  });
});
