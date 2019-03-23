import React from "react"
import { shallow } from "enzyme"
import StateVariables from "./index"

test("it renders", () => {
  const component = shallow(<StateVariables />)

  expect(component).toMatchSnapshot()
})
