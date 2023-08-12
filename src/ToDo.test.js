import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ToDo from "./ToDo";

test("renders todo item correctly", () => {
  const todo = {
    id: "1",
    task: "Test task",
    complete: false,
  };
  
  const { getByText } = render(
    <ToDo todo={todo} toggleTask={() => {}} removeTask={() => {}} />
  );
  
  const todoText = getByText("Test task");
  expect(todoText).toBeInTheDocument();
  expect(todoText).not.toHaveClass("strike");
});

test("toggles todo item completeness", () => {
  const todo = {
    id: "1",
    task: "Test task",
    complete: false,
  };
  
  const toggleTask = jest.fn();
  
  const { getByText } = render(
    <ToDo todo={todo} toggleTask={toggleTask} removeTask={() => {}} />
  );
  
  const todoText = getByText("Test task");
  fireEvent.click(todoText);
  
  expect(toggleTask).toHaveBeenCalledWith("1");
});