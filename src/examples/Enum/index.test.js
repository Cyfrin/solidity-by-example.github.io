import React from "react"
import { shallow } from "enzyme"
import Enum from "./index"

test("it renders", () => {
  const component = shallow(<Enum />)

  expect(component).toMatchSnapshot()
})
