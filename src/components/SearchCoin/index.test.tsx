import SearchCoin from ".";
import { render, screen } from "@testing-library/react";

test("Search coin input should be rendered", () => {
  render(<SearchCoin />);
  const searchInputEl = screen.getByPlaceholderText(/Enter coin/i);
  expect(searchInputEl).toBeInTheDocument();
});
