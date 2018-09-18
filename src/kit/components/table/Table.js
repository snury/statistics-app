import React from "react";
import { omit } from "lodash";
import { getClassName } from "kit/utils/components";
import cx from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Select from "kit/components/select/Select";

import "./Table.scss";

const styles = theme => ({
  root: {
    width:     "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
});

const cn = getClassName("table");

const CustomTableCell = withStyles(() => ({
  head: {
    fontWeight: 600,
    fontSize:   15,
    color:      "#000"
  }
}))(TableCell);

const CustomTable = ({
  headingRow,
  rows,
  classes,
  cb
}) => (
  <Paper className={classes.root}>
    <Table className={cx(`${classes.table}`, cn())}>
      <TableHead>
        <TableRow>
          {headingRow.map(cell =>
            <CustomTableCell key={cell}>{cell}</CustomTableCell>)}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(row => (
          <TableRow className={cx(cn("row"), classes.row)} key={row.id}>
            {Object.values(omit(row, ["id", "highlight"])).map((cell, id) => {
              return (Array.isArray(cell) ?
                <TableCell key={cell}>
                  <Select
                    handleChange={cb(row.id)}
                    options={cell}
                  />
                </TableCell>
                :
                <TableCell key={cell}>
                  <span
                    style={{ backgroundColor: id === row.highlight.cellCount ? row.highlight.color : "#FFF" }}
                    className={cx(cn("cell"), id === row.highlight.cellCount && cn("cell--highlighted"))}
                  >
                    {cell}
                  </span>
                </TableCell>
              );
            })
            }
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default withStyles(styles)(CustomTable);
