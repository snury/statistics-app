import React from "react";
import Adapter from "utils/enzyme-adapter-react";
import { shallow, configure } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Statistics from "../Statistics";

configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({});

describe("Test page Component", () => {
  it("should render without throwing an error", () => {
    expect(shallow(<Provider store={store}><Statistics /></Provider>).length).toBe(1);
  });
});
