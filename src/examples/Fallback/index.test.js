import React from "react"
import { shallow } from "enzyme"
import Fallback from "./index"

test("it renders", () => {
  const component = shallow(<Fallback />)

  expect(component).toMatchSnapshot()
})
