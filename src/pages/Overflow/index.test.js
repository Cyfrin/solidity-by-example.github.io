import { shallow } from "enzyme"
import React from "react"
import Overflow from "./index"

test("it renders", () => {
  const component = shallow(<Overflow />)

  expect(component).toMatchSnapshot()
})
