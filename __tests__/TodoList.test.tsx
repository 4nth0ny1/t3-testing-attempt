import { render, screen, waitFor } from "@testing-library/react";
import { TodoList } from "../src/components/TodoList";
import { TRPCWrapper } from "~/utils/wrappers/trpcwrapper";

const setup = () => {
  render(<TodoList />, {
    wrapper: TRPCWrapper,
  });
};

describe("TodoList Component", () => {
  it("TodoList", async () => {
    setup();
  });
});
