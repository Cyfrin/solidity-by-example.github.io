import React from "react"
import { shallow } from "enzyme"
import FallbackGasLimit from "./index"

test("it renders", () => {
  const component = shallow(<FallbackGasLimit />)

  expect(component).toMatchSnapshot()
})
