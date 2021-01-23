import React from "react";
import { render } from "@testing-library/react";
import TaskAdd from "./TaskAdd.jsx";

test("TaskAdd 1", () => {
  const { asFragment } = render(
    <TaskAdd />
  );
  expect(asFragment()).toMatchSnapshot();
});
