import React from "react";
import cx from "classnames";
import "./Container.scss";

export default props => (
  <div className={cx("container", props.className)}>
    {props.children}
  </div>
);
