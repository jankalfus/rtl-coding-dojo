import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";
import userEvent from "@testing-library/user-event";

test("Count is initially zero", () => {
  render(<Counter />);

  expect(screen.getByText(/0/)).toBeInTheDocument();
});

test('Clicking the "+" button increments the counter', () => {
  render(<Counter />);

  clickPlus();
  clickPlus();

  expect(screen.getByText(/2/)).toBeInTheDocument();
});

test('Clicking the "-" button decrements the counter', () => {
  render(<Counter />);

  clickMinus();
  clickMinus();
  clickMinus();

  expect(screen.getByText(/-3/)).toBeInTheDocument();
});

test('Combining the "+" and "-" button clicks yields the correct value', () => {
  render(<Counter />);

  clickPlus();
  clickPlus();
  clickMinus();

  expect(screen.getByText(/1/)).toBeInTheDocument();
});

const clickPlus = () => userEvent.click(screen.getByRole("button", { name: "+" }));
const clickMinus = () => userEvent.click(screen.getByRole("button", { name: "-" }));
