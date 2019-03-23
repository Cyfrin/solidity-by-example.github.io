import React from "react"
import { shallow } from "enzyme"
import Keccak256 from "./index"

test("it renders", () => {
  const component = shallow(<Keccak256 />)

  expect(component).toMatchSnapshot()
})
