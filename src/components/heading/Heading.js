import React from "react";
import { getClassName } from "kit/utils/components";
import Container from "components/container/Container";

import "./Heading.scss";

const cn = getClassName("heading");

const Heading = () => (
  <Container className={cn()}>
    <h1 className={cn("title")}>Analytics page</h1>
    <p className={cn("text")}>Review and check statistics of the current web site monitorings!</p>
  </Container>
);

export default Heading;
