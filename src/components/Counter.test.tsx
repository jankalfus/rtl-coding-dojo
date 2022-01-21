import {render, screen} from "@testing-library/react";
import {Counter} from "./Counter";
import userEvent from "@testing-library/user-event";

test("Count is initially zero", () => {
  render(<Counter />);

  expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
});

test('Clicking the "+" button increments the counter', () => {
  render(<Counter />);

  userEvent.click(screen.getByRole('button', {name: '+'}));

  expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
});

test('Clicking the "-" button decrements the counter', () => {
  render(<Counter value={1} />);

  userEvent.click(screen.getByRole('button', {name: '-'}));

  expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
});

test('value is 0 -> the "-" button is disabled', () => {
  render(<Counter value={0} />);

  expect(screen.getByRole("button", {name: "-"})).toBeDisabled();
});

export {};
