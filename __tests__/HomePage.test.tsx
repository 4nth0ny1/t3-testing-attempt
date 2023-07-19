import { render, screen } from "@testing-library/react";
import Home from "../src/pages/index";

describe("Home Page", () => {
  describe("Rendering", () => {
    it("should render Home Page text", () => {
      render(<Home />);
      expect(screen.getByText(/Home Page/i)).toBeInTheDocument();
    });
  });
});
