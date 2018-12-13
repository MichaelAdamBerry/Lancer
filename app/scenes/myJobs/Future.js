import React from "react";
import { Container, Row, Col, Table } from "reactstrap";
import PropTypes from "prop-types";
import moment from "moment";
import firebase from "firebase";
import Nav from "../dashboard/components/Nav";

const DashTable = props => {
  const jobs = props.jobs;
  return (
    <Col>
      <h5 className="tableHeading">Upcomping Jobs</h5>
      <Table hover striped>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Client</th>
            <th>Location</th>
          </tr>
          {jobs.map(job => {
            return (
              <tr>
                <td>{job.date}</td>
                <td>{job.startTime}</td>
                <td>{job.client}</td>
                <td>{job.location}</td>
              </tr>
            );
          })}
        </thead>
      </Table>
    </Col>
  );
};

const FullTable = props => {
  const jobs = props.jobs;
  return (
    <Container>
      <Row>
        <Nav />
        <Col>
          <h5 className="tableHeading">Upcomping Jobs</h5>
          <Table hover striped>
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Client</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map(job => {
                return (
                  <tr>
                    <td>{job.date}</td>
                    <td>{job.startTime}</td>
                    <td>{job.client}</td>
                    <td>{job.location}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default class Future extends React.Component {
  constructor(props) {
    super(props);
    this.callback = this.callback.bind(this);
    this.state = {
      jobs: []
    };
  }

  callback(snapshot) {
    let jobs = snapshot.val();
    let jobsArr = [];
    for (let job in jobs) {
      if (moment().isBefore(jobs[job].date) === true) {
        jobsArr.push({
          id: job,
          client: jobs[job].client,
          date: jobs[job].date,
          location: jobs[job].location,
          startTime: jobs[job].startTime,
          endTime: jobs[job].endTime
        });
      }
    }
    this.setState({ jobs: jobsArr }, console.log(this.state));
  }

  componentDidMount() {
    const jobsRef = firebase.database().ref("jobs");
    jobsRef.on("value", this.callback);
  }

  componentWillUnmount() {
    const jobsRef = firebase.database().ref("jobs");
    jobsRef.off("value", this.callback);
  }
  static propTypes = { fullView: PropTypes.bool.isRequired };
  static defaultProps = { fullView: true };
  render() {
    return (
      <Col>
        {!this.props.fullView ? (
          <DashTable jobs={this.state.jobs} />
        ) : (
          <FullTable jobs={this.state.jobs} />
        )}
      </Col>
    );
  }
}
