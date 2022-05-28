import { render, screen } from "../../../test-urils/testing-library-utils";
import { rest } from "msw";
import OrderEntry from "../OrderEntry";
import { server } from "../../../mocks/server";

test("handle errors for scoops and topping routes", async () => {
  server.resetHandlers(
    rest.get("http://localhost:3030/scoops", (req, res, ctx) =>
      res(ctx.status(500))
    ),
    rest.get("http://localhost:3030/toppings", (req, res, ctx) =>
      res(ctx.status(500))
    )
  );

  render(<OrderEntry />);

  const alerts = await screen.findAllByRole("alert");

  expect(alerts).toHaveLength(2);
});
