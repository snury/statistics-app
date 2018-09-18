import React, { Component } from "react";
import { connect } from "react-redux";
import { isEmpty } from "lodash";
import { getClassName } from "kit/utils/components";
import Container from "components/container/Container";
import Button from "kit/components/button/Button";
import { LineChart } from "react-easy-chart";
import { Link } from "react-router-dom";
import { loadStatisticsData } from "ducks/statistics/actions";
import { loadMonitoringData } from "ducks/monitoring/actions";


import "./Statistics.scss";

const cn = getClassName("statistics");

const MonitoringLink = props => <Link to="/" {...props} />;

export const styles = theme => ({
  root: {
    display:        "table",
    fontFamily:     theme.typography.fontFamily,
    width:          "100%",
    borderCollapse: "collapse",
    borderSpacing:  0
  }
});

class CheckIns extends Component {
  state = {
    siteName: ""
  };

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.props.loadStatisticsData(id);
    this.getSiteName();
  }

  findSiteName = () => {
    const { monitoringsData } = this.props;
    const { match: { params: { id: currentID } } } = this.props;
    const siteName = monitoringsData.find(({ id }) => id === currentID).name;

    this.setState({ siteName });
  };

  getSiteName = () => {
    const { monitoringsData } = this.props;
    if (isEmpty(monitoringsData)) {
      this.props.loadMonitoringData().then(() => this.findSiteName());
    } else {
      this.findSiteName();
    }
  };

  render() {
    const { data } = this.props;
    const { siteName } = this.state;

    return (
      <Container className={cn()}>
        <Button component={MonitoringLink} title="Go Back" />
        <h1 className={cn("heading")}>{siteName}</h1>
        <LineChart
          xType="time"
          tickTimeDisplayFormat="%x"
          lineColors={["#68BEBF"]}
          axes={true}
          grid={true}
          verticalGrid={true}
          interpolate="cardinal"
          width={1020}
          height={350}
          data={[data]}
        />
      </Container>
    );
  }
}

const mapStateToProps = ({ statistics: { statisticsData }, monitoring: { monitoringsData } }) => ({
  data: statisticsData,
  monitoringsData
});

export default connect(mapStateToProps, { loadStatisticsData, loadMonitoringData })(CheckIns);
