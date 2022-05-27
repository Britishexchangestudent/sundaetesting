import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";

import userEvent from "@testing-library/user-event";
import App from "../../../App";

test("initial conditions", () => {
  render(
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
  const checkbox = screen.getByTestId("my-checkbox");
  expect(checkbox).not.toBeChecked();

  const button = screen.getByRole("button", { name: "Confirm" });
  expect(button).toBeDisabled();
});
