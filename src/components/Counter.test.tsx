import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";
import userEvent from "@testing-library/user-event";

test("Count is initially zero", () => {
  render(<Counter />);

  expect(screen.getByText(/0/)).toBeInTheDocument();
});

test('Clicking the "+" button increments the counter', () => {
  render(<Counter />);

  userEvent.click(screen.getByRole("button", { name: "+" }));
  userEvent.click(screen.getByRole("button", { name: "+" }));

  expect(screen.getByText(/2/)).toBeInTheDocument();
});

test('Clicking the "-" button decrements the counter', () => {
  render(<Counter />);

  userEvent.click(screen.getByRole("button", { name: "-" }));
  userEvent.click(screen.getByRole("button", { name: "-" }));
  userEvent.click(screen.getByRole("button", { name: "-" }));

  expect(screen.getByText(/-3/)).toBeInTheDocument();
});

test('Combining the "+" and "-" button clicks yields the correct value', () => {
  render(<Counter />);

  userEvent.click(screen.getByRole("button", { name: "+" }));
  userEvent.click(screen.getByRole("button", { name: "+" }));
  userEvent.click(screen.getByRole("button", { name: "-" }));

  expect(screen.getByText(/1/)).toBeInTheDocument();
});
