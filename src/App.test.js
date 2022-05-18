import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("initial conditions", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();

  const button = screen.getByRole("button", { name: "Confirm" });
  expect(button).toBeDisabled();
});

test("when checkbox is clicked, button is enabled. and on second click its disabled again", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox");
  const button = screen.getByRole("button", { name: "Confirm" });

  expect(checkbox).not.toBeChecked();
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();
  expect(button).not.toBeDisabled();

  fireEvent.click(checkbox);

  expect(checkbox).not.toBeChecked();
  expect(button).toBeDisabled();
});
