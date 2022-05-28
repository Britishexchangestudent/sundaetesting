import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { OrderDetailsProvider } from "../../../context/OrderDetails";
import Options from "../Options";
import OrderEntry from "../OrderEntry";

// test("update scoop subtotal when scoop changes", async () => {
//   render(<Options optionType="scoops" />, { wrapper: OrderDetailsProvider });

//   // mkae sure total is initally $0:00
//   const scoopsSubtotal = screen.getByText("Scoops total: $", { exact: false });

//   expect(scoopsSubtotal).toHaveTextContent("0.00");

//   // update vanilla scoop to 1 and check subtotal
//   const vanillaInput = await screen.findByRole("spinbutton", {
//     name: "Vanilla",
//   });

//   userEvent.clear(vanillaInput);
//   userEvent.type(vanillaInput, "1");

//   expect(vanillaInput).toHaveTextContent("2:00");

//   // update chocolate scoop to 1 and check subtotal
//   const chocolateInput = await screen.findByRole("spinbutton", {
//     name: "Chocolate",
//   });

//   userEvent.clear(chocolateInput);
//   userEvent.type(chocolateInput, "2");

//   expect(chocolateInput).toHaveTextContent("6:00");
// });

test("update scoop subtotal when scoops change", async () => {
  render(<Options optionType="scoops" />, { wrapper: OrderDetailsProvider });

  // make sure total starts out $0.00
  const scoopsSubtotal = screen.getByText("Scoops total: $", { exact: false });
  expect(scoopsSubtotal).toHaveTextContent("0.00");

  // update vanilla scoops to 1 and check the subtotal
  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, "1");
  expect(scoopsSubtotal).toHaveTextContent("2.00");

  // update chocolate scoops to 2 and check subtotal
  const chocolateInput = await screen.findByRole("spinbutton", {
    name: "Chocolate",
  });
  userEvent.clear(chocolateInput);
  userEvent.type(chocolateInput, "2");
  expect(scoopsSubtotal).toHaveTextContent("6.00");
});

test("update topping subtotal when toppings change", async () => {
  render(<Options optionType="toppings" />, { wrapper: OrderDetailsProvider });

  // make sure total starts out $0.00
  const toppingsSubtotal = screen.getByText("Toppings total: $", {
    exact: false,
  });
  expect(toppingsSubtotal).toHaveTextContent("0.00");

  const cherriesCheckbox = await screen.findByRole("checkbox", {
    name: "Cherries",
  });
  userEvent.click(cherriesCheckbox);

  expect(toppingsSubtotal).toHaveTextContent("1.50");

  const hotFudgeCheckbox = await screen.findByRole("checkbox", {
    name: "Hot fudge",
  });
  userEvent.click(hotFudgeCheckbox);

  expect(toppingsSubtotal).toHaveTextContent("3.00");

  userEvent.click(hotFudgeCheckbox);
  expect(toppingsSubtotal).toHaveTextContent("1.50");
});

describe("grand total", () => {
  test("grand total starts at $0.00", async () => {
    render(<OrderEntry />, { wrapper: OrderDetailsProvider });
    const grandTotal = screen.getByRole("heading", {
      name: /grand total: \$/i,
    });

    expect(grandTotal).toHaveTextContent("0.00");
  });
  test("grand total updates properly when scoop is added", async () => {
    render(<OrderEntry />, { wrapper: OrderDetailsProvider });

    const grandTotal = screen.getByRole("heading", {
      name: /grand total: \$/i,
    });

    const vanillaInput = await screen.findByRole("spinbutton", {
      name: "Vanilla",
    });

    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, "2");
    expect(grandTotal).toHaveTextContent("4.00");
  });
  test("grand total updates properly when topping is added", async () => {
    render(<OrderEntry />, { wrapper: OrderDetailsProvider });

    const grandTotal = screen.getByRole("heading", {
      name: /grand total: \$/i,
    });

    const cherriesCheckbox = await screen.findByRole("checkbox", {
      name: "Cherries",
    });

    userEvent.click(cherriesCheckbox);

    expect(grandTotal).toHaveTextContent("1.50");
  });
  test("grand total updates properly when item is removed", async () => {
    render(<OrderEntry />, { wrapper: OrderDetailsProvider });

    const grandTotal = screen.getByRole("heading", {
      name: /grand total: \$/i,
    });

    const vanillaInput = await screen.findByRole("spinbutton", {
      name: "Vanilla",
    });

    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, "2");

    const cherriesCheckbox = await screen.findByRole("checkbox", {
      name: "Cherries",
    });

    userEvent.click(cherriesCheckbox);

    expect(grandTotal).toHaveTextContent("5.50");

    userEvent.click(cherriesCheckbox);

    expect(grandTotal).toHaveTextContent("4.00");
  });
});
