import React from "react"
import { shallow } from "enzyme"
import Events from "./index"

test("it renders", () => {
  const component = shallow(<Events />)

  expect(component).toMatchSnapshot()
})
