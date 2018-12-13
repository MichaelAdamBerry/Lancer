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
      <h5 className="tableHeading">Past Jobs</h5>
      <Table hover striped>
        <thead>
          <tr>
            <th>Client</th>
            <th>Date</th>
            <th>Total $</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map(job => {
            return (
              <tr>
                <td>{job.client}</td>
                <td>{job.date}</td>
                <td />
                <td>{!job.paid ? "nope" : "yep"}</td>
              </tr>
            );
          })}
        </tbody>
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
          <h5 className="tableHeading">Past Jobs</h5>
          <Table hover striped>
            <thead>
              <tr>
                <th>Client</th>
                <th>Date</th>
                <th>Total $</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map(job => {
                return (
                  <tr>
                    <td>{job.client}</td>
                    <td>{job.date}</td>
                    <td />
                    <td>{!job.paid ? "nope" : "yep"}</td>
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

export default class Past extends React.Component {
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
      if (moment().isBefore(jobs[job].date) === false) {
        jobsArr.push({
          id: job,
          client: jobs[job].client,
          date: jobs[job].date,
          paid: jobs[job].paid
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
