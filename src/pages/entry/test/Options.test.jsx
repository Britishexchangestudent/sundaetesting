import { render, screen } from "@testing-library/react";
import { OrderDetailsProvider } from "../../../context/OrderDetails";
import Options from "../Options";

test("displays image for each scoop from server", async () => {
  render(<Options optionType="scoops" />, { wrapper: OrderDetailsProvider });

  //find images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  // confirm alt text of images
  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("displays image for each topping from server", async () => {
  render(<Options optionType="toppings" />, { wrapper: OrderDetailsProvider });

  //find images
  const toppingsImages = await screen.findAllByRole("img", {
    name: /toppings$/i,
  });
  expect(toppingsImages).toHaveLength(3);

  // confirm alt text of images
  const altText = toppingsImages.map((img) => img.alt);
  expect(altText).toEqual([
    "Cherries toppings",
    "M&Ms toppings",
    "Hot fudge toppings",
  ]);
});
