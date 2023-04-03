import React, { useState } from "react"
import "./form.css"

export const Form = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [dateOfBirth, setDateOfBirth] = useState("")
  const [color, setColor] = useState("")
  const [salary, setSalary] = useState(50000)
  const [nameError, setNameError] = useState("")
  const [emailError, setEmailError] = useState("")
  const [dobError, setDobError] = useState("")

  const nameChange = (event) => {
    setName(event.target.value)
    if (!event.target.value.trim()) {
      setNameError("Name is required.")
    } else {
      setNameError(null)
    }
  }

  const emailChange = (event) => {
    setEmail(event.target.value)
    if (!/\S+@\S+\.\S+/.test(event.target.value)) {
      setEmailError("Email is invalid.")
    } else {
      setEmailError(null)
    }
  }

  const dateOfBirthChange = (event) => {
    setDateOfBirth(event.target.value)
    const selectedDate = new Date(event.target.value)
    const currentDate = new Date()
    if (selectedDate > currentDate) {
      setDobError("Date of Birth cannot be in the future.")
    } else {
      setDobError(null)
    }
  }

  const colorChange = (event) => {
    setColor(event.target.value)
  }

  const salaryChange = (event) => {
    setSalary(event.target.value)
  }

  const submit = (event) => {
    event.preventDefault()
    if (nameError || nameError !== null) {
      alert("form error")
      return
    }
    if (emailError || emailError !== null) {
      alert("form error")
      return
    }
    if (dobError || dobError !== null) {
      alert("form error")
      return
    }
    alert({
      name,
      email,
      dateOfBirth,
      color,
      salary,
    })
  }

  return (
    <div className='form'>
      <h1>My Form</h1>
      <form onSubmit={submit}>
        <div>
          <label htmlFor='name'>Name*</label>
          <input type='text' id='name' value={name} onChange={nameChange} />
          {nameError && <div className='error'>{nameError}</div>}
        </div>
        <div>
          <label htmlFor='email'>Email*</label>
          <input type='email' id='email' value={email} onChange={emailChange} />
          {emailError && <div className='error'>{emailError}</div>}
        </div>
        <div>
          <label htmlFor='dob'>Date of Birth*</label>
          <input
            type='date'
            id='dob'
            value={dateOfBirth}
            onChange={dateOfBirthChange}
          />
          {dobError && <div className='error'>{dobError}</div>}
        </div>
        <div>
          <label htmlFor='color'>Favorite color*</label>
          <input
            type='text'
            id='color'
            value={color}
            onChange={colorChange}
            pattern='[a-zA-Z]+'
            title='Letters only'
          />
        </div>
        <div>
          <label htmlFor='salary'>Salary*</label>
          <input
            type='range'
            id='salary'
            min='0'
            max='100000'
            step='1000'
            value={salary}
            onChange={salaryChange}
          />
          <output htmlFor='salary' className='salary'>
            £{salary}
          </output>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form
