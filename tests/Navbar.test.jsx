// Home.test.jsx

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Navbar from "../src/components/navbar/Navbar";

describe("Home component", () => {
  it("renders home component", () => {
    const container = render(<Navbar />);
    expect(container).toMatchSnapshot();
  });
});
