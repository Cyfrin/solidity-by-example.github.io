import React from "react"
import { shallow } from "enzyme"
import App from "./App"

test("it renders", () => {
  const component = shallow(<App />)

  expect(component).toMatchSnapshot()
})
