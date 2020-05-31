import React from "react"
import { shallow } from "enzyme"
import Call from "./index"

test("it renders", () => {
  const component = shallow(<Call />)

  expect(component).toMatchSnapshot()
})
