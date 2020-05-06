import { shallow } from "enzyme"
import React from "react"
import UniDirectionalPaymentChannel from "./index"

test("it renders", () => {
  const component = shallow(<UniDirectionalPaymentChannel />)

  expect(component).toMatchSnapshot()
})
