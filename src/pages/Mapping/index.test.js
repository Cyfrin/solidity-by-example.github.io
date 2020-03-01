import React from "react"
import { shallow } from "enzyme"
import Mapping from "./index"

test("it renders", () => {
  const component = shallow(<Mapping />)

  expect(component).toMatchSnapshot()
})
