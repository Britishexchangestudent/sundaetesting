import { fireEvent, render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

test("summary form div is about", () => {
  render(<SummaryForm />);
  const div = screen.getByRole("heading", { name: "summaryform" });
  expect(div).toHaveTextContent("summaryform");
});

test("button has correct initial text", () => {
  render(<SummaryForm />);
  const text = screen.getByRole("button", { name: "summaryform" });
  expect(text).toHaveTextContent("summaryform");
});
