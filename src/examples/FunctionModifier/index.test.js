import React from "react"
import { shallow } from "enzyme"
import FunctionModifier from "./index"

test("it renders", () => {
  const component = shallow(<FunctionModifier />)

  expect(component).toMatchSnapshot()
})
