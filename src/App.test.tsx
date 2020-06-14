import React from "react"
import { shallow } from "enzyme"
import App from "./App"

test("CI", () => {
  expect(1).toEqual(2)
})

test("it renders", () => {
  const component = shallow(<App />)

  expect(component).toMatchSnapshot()
})
