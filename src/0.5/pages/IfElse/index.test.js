import React from "react"
import { shallow } from "enzyme"
import IfElse from "./index"

test("it renders", () => {
  const component = shallow(<IfElse />)

  expect(component).toMatchSnapshot()
})
