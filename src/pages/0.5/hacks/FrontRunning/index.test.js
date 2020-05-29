import { shallow } from "enzyme"
import React from "react"
import FrontRunning from "./index"

test("it renders", () => {
  const component = shallow(<FrontRunning />)

  expect(component).toMatchSnapshot()
})
