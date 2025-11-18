import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";

import { MyAwesomeApp } from "./MyAwesomeApp"; // Nota: Agregué llaves si MyAwesomeApp es una exportación nombrada

describe("MyAwesomeApp", () => {
  test("should render firstName and lastName", () => {
    render(<MyAwesomeApp />);

    console.log(screen.debug());

    // console.log(container.innerHTML); // Línea comentada en la imagen
  });
});
