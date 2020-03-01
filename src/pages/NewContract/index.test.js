import React from "react"
import { shallow } from "enzyme"
import NewContract from "./index"

test("it renders", () => {
  const component = shallow(<NewContract />)

  expect(component).toMatchSnapshot()
})
