import React from "react"
import { shallow } from "enzyme"
import PaymentChannel from "./index"

test("it renders", () => {
  const component = shallow(<PaymentChannel />)

  expect(component).toMatchSnapshot()
})
