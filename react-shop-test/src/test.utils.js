import { render } from "@testing-library/react";
import { OrderContextPropvider } from "./contexts/OrderContext";

const customRender = (ui, options) =>
  render(ui, { wrapper: OrderContextPropvider, ...options });

export * from "@testing-library/react";
export { customRender as render };
