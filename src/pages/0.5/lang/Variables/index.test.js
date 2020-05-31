import React from "react"
import { shallow } from "enzyme"
import Variables from "./index"

test("it renders", () => {
  const component = shallow(<Variables />)

  expect(component).toMatchSnapshot()
})
