import React from "react"
import { shallow } from "enzyme"
import Error from "./index"

test("it renders", () => {
  const component = shallow(<Error />)

  expect(component).toMatchSnapshot()
})
