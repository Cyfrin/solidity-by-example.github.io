import React from "react"
import { shallow } from "enzyme"
import Import from "./index"

test("it renders", () => {
  const component = shallow(<Import />)

  expect(component).toMatchSnapshot()
})
