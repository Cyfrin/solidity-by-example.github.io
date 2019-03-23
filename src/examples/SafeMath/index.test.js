import React from "react"
import { shallow } from "enzyme"
import SafeMath from "./index"

test("it renders", () => {
  const component = shallow(<SafeMath />)

  expect(component).toMatchSnapshot()
})
