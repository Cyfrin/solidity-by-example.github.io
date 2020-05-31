import React from "react"
import { shallow } from "enzyme"
import Loop from "./index"

test("it renders", () => {
  const component = shallow(<Loop />)

  expect(component).toMatchSnapshot()
})
