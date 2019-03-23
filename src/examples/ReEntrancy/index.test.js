import React from "react"
import { shallow } from "enzyme"
import ReEntrancy from "./index"

test("it renders", () => {
  const component = shallow(<ReEntrancy />)

  expect(component).toMatchSnapshot()
})
