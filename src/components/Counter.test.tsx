import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";
import userEvent from "@testing-library/user-event";

test("Count is initially zero", () => {
  render(<Counter />);

  expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
});

test('Clicking the "+" button increments the counter', () => {
  render(<Counter />);

  userEvent.click(screen.getByRole("button", { name: "+" }));

  expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
});

test('Clicking the "-" button decrements the counter', () => {
  render(<Counter initialValue={1} />);

  userEvent.click(screen.getByRole("button", { name: "-" }));

  expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
});

test('initialValue is 0 -> the "-" button is disabled', () => {
  render(<Counter initialValue={0} />);

  expect(screen.getByRole("button", { name: "-" })).toBeDisabled();
});

test('initialValue is 100, clicking the "+" increments the counter to 101', () => {
  render(<Counter initialValue={100} />);

  userEvent.click(screen.getByRole("button", { name: "+" }));

  expect(screen.getByText(/Count: 101/i)).toBeInTheDocument();
});

test("initial value is -100 set the counter to 0", () => {
  render(<Counter initialValue={-100} />);

  expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
});

test("initial value is null -> counter is 0", () => {
  render(<Counter initialValue={null} />);

  expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
});

test("initial value is undefined -> counter is 0", () => {
  render(<Counter initialValue={undefined} />);

  expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
});

export {};
