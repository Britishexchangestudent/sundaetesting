import { render } from "@testing-library/react";
import { OrderDetailsProvider } from "../context/OrderDetails";

const renderWithContext = (ui, options) =>
  render(ui, { wrapper: OrderDetailsProvider, ...options });

//re-export everythiung
export * from "@testing-library/react";

//but override render  method
export { renderWithContext as render };
