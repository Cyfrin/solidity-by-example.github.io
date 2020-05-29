import { shallow } from "enzyme"
import React from "react"
import DenialOfService from "./index"

test("it renders", () => {
  const component = shallow(<DenialOfService />)

  expect(component).toMatchSnapshot()
})
