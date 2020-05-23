import { shallow } from "enzyme"
import React from "react"
import ExternalContract from "./index"

test("it renders", () => {
  const component = shallow(<ExternalContract />)

  expect(component).toMatchSnapshot()
})
