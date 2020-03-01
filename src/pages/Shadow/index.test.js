import React from "react"
import { shallow } from "enzyme"
import Shadow from "./index"

test("it renders", () => {
  const component = shallow(<Shadow />)

  expect(component).toMatchSnapshot()
})
