import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ToDoForm from "./ToDoForm";

test("handles form input correctly", () => {
  const addTask = jest.fn();
  
  const { getByPlaceholderText } = render(
    <ToDoForm addTask={addTask} />
  );
  
  const input = getByPlaceholderText("Введите значение");
  fireEvent.change(input, { target: { value: "New task" } });
  
  expect(input.value).toBe("New task");
});

test("submits form with correct input", () => {
  const addTask = jest.fn();
  
  const { getByText, getByPlaceholderText } = render(
    <ToDoForm addTask={addTask} />
  );
  
  const input = getByPlaceholderText("Введите значение");
  fireEvent.change(input, { target: { value: "New task" } });
  
  const submitButton = getByText("Сохранить");
  fireEvent.click(submitButton);
  
  expect(addTask).toHaveBeenCalledWith("New task");
});