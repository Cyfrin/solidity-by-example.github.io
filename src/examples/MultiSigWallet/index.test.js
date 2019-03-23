import React from "react"
import { shallow } from "enzyme"
import MultiSigWallet from "./index"

test("it renders", () => {
  const component = shallow(<MultiSigWallet />)

  expect(component).toMatchSnapshot()
})
