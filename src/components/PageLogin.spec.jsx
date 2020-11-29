import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import "./../setupTests";

import PageLogin from "./PageLogin";

describe("PageLogin", () => {
  let wrapper;

  it("renders correctly", () => {
    wrapper = shallow(<PageLogin />);
    expect(wrapper.find("#email").prop("name")).toEqual("email");
    expect(wrapper.find("#password").prop("name")).toEqual("password");
    expect(wrapper.find("#login-button")).toHaveLength(1);
    expect(wrapper.find("#registration-link")).toHaveLength(1);
  });
});
