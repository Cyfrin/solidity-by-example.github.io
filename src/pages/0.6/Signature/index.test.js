import React from "react"
import { shallow } from "enzyme"
import Signature from "./index"

test("it renders", () => {
  const component = shallow(<Signature />)

  expect(component).toMatchSnapshot()
})
