import React from "react"
import { shallow } from "enzyme"
import CallContract from "./index"

test("it renders", () => {
  const component = shallow(<CallContract />)

  expect(component).toMatchSnapshot()
})
