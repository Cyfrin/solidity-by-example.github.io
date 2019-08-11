import React from "react"
import { shallow } from "enzyme"
import HelloWorld from "./index"

test("it renders", () => {
  const component = shallow(<HelloWorld />)

  expect(component).toMatchSnapshot()
})
