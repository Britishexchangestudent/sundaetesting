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
  const checkbox = screen.getByRole("heading", { name: "Scoops" });
  expect(checkbox).toBeInTheDocument();
});
