import React from "react";
import { Container, Row, Col, Table } from "reactstrap";
import PropTypes from "prop-types";
import moment from "moment";
import firebase from "firebase";
import Nav from "../dashboard/components/Nav";
import { firestore } from "../../../app/firebase";
import {
  collectIdsAndDocs,
  formatDate,
  formatTime
} from "../../../app/utilities";

const DashTable = props => {
  const jobs = props.jobs;
  return (
    <Col>
      <h5 className="tableHeading">Upcomping Jobs</h5>
      <Table hover striped responsive>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Client</th>
            <th>Location</th>
          </tr>
          {jobs.map(job => {
            return (
              <tr key={job.id}>
                <td>{formatDate(job.date)}</td>
                <td>{formatTime(job.startTime)}</td>
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
  const { jobs, handleRemove } = props;
  return (
    <Container fluid>
      <Row>
        <Nav />
        <Col>
          <h5 className="tableHeading">Upcomping Jobs</h5>
          <Table hover striped responsive>
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
                  <tr key={job.id}>
                    <td>{job.date}</td>
                    <td>{formatTime(job.startTime)}</td>
                    <td>{job.client}</td>
                    <td>{job.location}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => {
                          handleRemove(job.id);
                        }}
                        className="btn btn-small btn-danger">
                        Remove
                      </button>
                    </td>
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
    this.state = {
      jobs: null,
      userId: null
    };
  }

  unsubscribe = null;

  componentDidMount = async () => {
    this.unsubscribe = await firestore
      .collection("jobs")
      .onSnapshot(snapshot => {
        const jobs = snapshot.docs.map(collectIdsAndDocs);
        this.setState({ jobs }, console.log(jobs));
      });
  };

  componentWillUnmount = () => {
    this.unsubscribe();
  };

  handleRemove = async id => {
    await firestore.doc(`jobs/${id}`).delete();
  };

  static propTypes = { fullView: PropTypes.bool.isRequired };
  static defaultProps = { fullView: true };
  render() {
    if (!this.state.jobs) {
      return <div>loading</div>;
    } else {
      return (
        <Col>
          {!this.props.fullView ? (
            <DashTable jobs={this.state.jobs} />
          ) : (
            <FullTable
              jobs={this.state.jobs}
              handleRemove={this.handleRemove}
            />
          )}
        </Col>
      );
    }
  }
}
