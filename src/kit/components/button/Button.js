import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin:      theme.spacing.unit,
    color:       "#68BEBF",
    borderColor: "#68BEBF"
  },
  input: {
    display: "none"
  }
});

const OutlinedButtons = ({
  title,
  classes,
  onClick,
  component = null
}) => (
  <div>
    <Button component={component} onClick={onClick} variant="outlined" className={classes.button}>
      {title}
    </Button>
  </div>
);

export default withStyles(styles)(OutlinedButtons);
