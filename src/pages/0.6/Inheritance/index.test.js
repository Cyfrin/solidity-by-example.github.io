import React from "react"
import { shallow } from "enzyme"
import Inheritance from "./index"

test("it renders", () => {
  const component = shallow(<Inheritance />)

  expect(component).toMatchSnapshot()
})
