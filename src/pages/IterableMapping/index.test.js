import React from "react"
import { shallow } from "enzyme"
import IterableMapping from "./index"

test("it renders", () => {
  const component = shallow(<IterableMapping />)

  expect(component).toMatchSnapshot()
})
