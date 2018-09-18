import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { getClassName } from "kit/utils/components";
import Container from "components/container/Container";
import Table from "kit/components/table/Table";
import {
  loadMonitoringData,
  activateMonitoring,
  deactivateMonitoring
} from "ducks/monitoring/actions";

import "./Monitoring.scss";

const cn = getClassName("monitoring");

export const styles = theme => ({
  root: {
    display:        "table",
    fontFamily:     theme.typography.fontFamily,
    width:          "100%",
    borderCollapse: "collapse",
    borderSpacing:  0
  }
});

const headingRow = [
  "Status",
  "Name",
  "Last month views",
  "Total views",
  "Actions"
];

class Monitoring extends Component {
  componentDidMount() {
    this.props.loadMonitoringData();
  }

  handleActionsChange = id => ({ target: { value } }) => {
    switch (value) {
      case 0:
        this.props.deactivateMonitoring(id);
        break;

      case 1:
        this.props.activateMonitoring(id);
        break;

      case 2:
        this.props.history.push(`/statistics/${id}`);
        break;

      default:
        return null;
    }

    return null;
  };

  render() {
    const { data } = this.props;

    return (
      <Container className={cn()}>
        <Table
          rows={data}
          headingRow={headingRow}
          cb={this.handleActionsChange}
        />
      </Container>
    );
  }
}

const mapStateToProps = ({ monitoring: { monitoringsData } }) => ({
  data: monitoringsData
});

export default withRouter(connect(mapStateToProps, {
  loadMonitoringData,
  activateMonitoring,
  deactivateMonitoring,
  routerPush: push
})(Monitoring));
