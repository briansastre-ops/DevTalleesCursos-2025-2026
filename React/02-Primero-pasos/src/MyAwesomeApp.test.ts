import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { MyAwesomeApp } from "./MyAwesomeApp";

describe("MyAwesomeApp", () => {
  test("should render firstName and lastName", () => {
    const { container } = render(MyAwesomeApp);

    console.log(screen.debug());
    const h1 = container.querySelector("h1");
    const h3 = container.querySelector("h3");
    console.log(h1);

    expect(h1?.innerHTML).toContain("Fernando");
    expect(h3?.innerHTML).toContain("Herrera");
    // console.log(container.innerHTML); // Línea comentada en la imagen
  });
  test("should render firstName and lastName", () => {
    render(MyAwesomeApp);

    screen.debug();
    //const h1 = screen.getByRole("heading", {
    //level: 1,
    //});
    const h1 = screen.getByTestId("first-name-title");
    console.log(h1.innerHTML);
  });
});
