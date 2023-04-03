import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import Form from "./Form"

describe("Form", () => {
  const mockAlert = jest.spyOn(window, "alert").mockImplementation(() => {})
  test("submits form when all fields are valid", () => {
    const mockSubmit = jest.fn()
    render(<Form onSubmit={mockSubmit} />)

    fireEvent.change(screen.getByLabelText("Name*"), {
      target: { value: "Sherif O" },
    })
    fireEvent.change(screen.getByLabelText("Email*"), {
      target: { value: "sherifO@hotmail.com" },
    })
    fireEvent.change(screen.getByLabelText("Date of Birth*"), {
      target: { value: "1989-01-06" },
    })
    fireEvent.change(screen.getByLabelText("Favorite color*"), {
      target: { value: "red" },
    })
    fireEvent.change(screen.getByLabelText("Salary*"), {
      target: { value: 50000 },
    })

    // Submit the form
    fireEvent.click(screen.getByText("Submit"))

    // Check that submit function was called with correct values
    expect(mockAlert).toHaveBeenCalledWith({
      color: "red",
      dateOfBirth: "1989-01-06",
      email: "sherifO@hotmail.com",
      name: "Sherif O",
      salary: 50000,
    })
  })

  test("alert error messages when form is submitted incorrectly", () => {
    render(<Form />)

    // Submit the form without filling in any fields
    fireEvent.click(screen.getByText("Submit"))

    // Check that error messages are displayed for all required fields
    expect(mockAlert).toHaveBeenCalledWith("form error")
  })
})
