import React from "react";
import { Col, Table } from "reactstrap";
import PropTypes from "prop-types";
import moment from "moment";
import firebase from "firebase";
import { firestore, auth } from "../../../firebase";
import { collectIdsAndDocs, formatDate, formatTime } from "../../../utilities";

const FullTable = props => {
  const { jobs, handleRemove } = props;
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col content shadow">
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
        </div>
      </div>
    </div>
  );
};

export default class Future extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: null
    };
  }

  unsubscribe = null;

  componentDidMount = async () => {
    this.unsubscribe = await firestore
      .collection(`users/${this.props.location.state.uid}/jobs`)
      .onSnapshot(snapshot => {
        const jobs = snapshot.docs.map(collectIdsAndDocs);
        this.setState({ jobs });
      });
  };

  componentWillUnmount = async () => {
    this.unsubscribe();
  };

  handleRemove = async id => {
    await firestore
      .doc(`users/${this.props.location.state.uid}/jobs/${id}`)
      .delete();
  };

  static propTypes = { fullView: PropTypes.bool.isRequired };
  static defaultProps = { fullView: true };
  render() {
    if (!this.state.jobs) {
      return (
        <small className="text-muted">
          You have no upcoming jobs to display
        </small>
      );
    } else {
      return (
        <Col>
          <FullTable jobs={this.state.jobs} handleRemove={this.handleRemove} />
        </Col>
      );
    }
  }
}
