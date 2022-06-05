// import { render, screen } from "@testing-library/react";
// import { RecoilRoot } from "recoil";
// import App from "./App";
// import userEvent from "@testing-library/user-event";

// test("initial conditions", () => {
//   render(
//     <RecoilRoot>
//       <App />
//     </RecoilRoot>
//   );
//   const checkbox = screen.getByTestId("my-checkbox");
//   expect(checkbox).not.toBeChecked();

//   const button = screen.getByRole("button", { name: "Confirm" });
//   expect(button).toBeDisabled();
// });

// test("when checkbox is clicked, button is enabled. and on second click its disabled again", () => {
//   render(
//     <RecoilRoot>
//       <App />
//     </RecoilRoot>
//   );
//   const checkbox = screen.getByTestId("my-checkbox");
//   const button = screen.getByRole("button", { name: "Confirm" });

//   expect(checkbox).not.toBeChecked();
//   expect(button).toBeDisabled();

//   userEvent.click(checkbox);

//   expect(checkbox).toBeChecked();
//   expect(button).not.toBeDisabled();

//   userEvent.click(checkbox);

//   expect(checkbox).not.toBeChecked();
//   expect(button).toBeDisabled();
// });

// test("modal appears once enabled button is clicked", () => {
//   render(
//     <RecoilRoot>
//       <App />
//     </RecoilRoot>
//   );

//   const modalHidden = screen.queryByText(
//     /Nothing will be sent to you so order away/i
//   );

//   expect(modalHidden).not.toBeInTheDocument();

//   const checkbox = screen.getByTestId("my-checkbox");
//   const button = screen.getByRole("button", { name: "Confirm" });

//   userEvent.click(checkbox);

//   // expect(checkbox).toBeChecked();
//   // expect(button).not.toBeDisabled();

//   userEvent.click(button);

//   // expect(cancelButton).toBeInTheDocument();

//   const modal = screen.queryByText(
//     /Nothing will be sent to you so order away/i
//   );

//   expect(modal).toBeInTheDocument();

//   const cancelButton = screen.getByRole("button", { name: "Cancel" });

//   userEvent.click(cancelButton);

//   expect(modal).not.toBeInTheDocument();
// });

import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";

import userEvent from "@testing-library/user-event";
import App from "./App";

test("initial conditions", () => {
  render(
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
  const checkbox = screen.getByRole("heading", { name: "Scoops" });
  expect(checkbox).toBeInTheDocument();
});
