import React from "react";
import { Container, Row, Col, Table } from "reactstrap";
import PropTypes from "prop-types";
import moment from "moment";
import Nav from "../dashboard/components/Nav";
import { firestore, auth } from "../../firebase";
import { collectIdsAndDocs, formatDate } from "../../../app/utilities";

const FullTable = props => {
  const { jobs, handleRemove, handleEdit } = props;
  return (
    <div className="container-fluid">
      <div className="row">
        <Nav />
        <div className="col content shadow">
          <h5 className="tableHeading">Past Jobs</h5>
          <Table hover striped responsive>
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
                  <tr key={job.id}>
                    <td>{job.client}</td>
                    <td>{formatDate(job.date)}</td>
                    <td />
                    <td>{!job.paid ? "nope" : "yep"}</td>
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
                    <td>
                      <button
                        type="button"
                        onClick={() => {
                          handleEdit(job);
                        }}
                      />
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

export default class Past extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: null
    };
  }

  unsubscribe = null;

  componentDidMount = async () => {
    this.getJobsData();
  };

  getJobsData = async () => {
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

  handleEdit = job => {
    const properties = { ...job };
    console.log("handleEdit fired", job);
    //redirect to new route EditJob component job as props. New form that has an onSubmit function that updates database
  };

  handleRemove = async id => {
    firestore.doc(`users/${this.props.location.state.uid}jobs/${id}`).delete();
  };

  render() {
    console.log(auth.currentUser);
    if (!this.state.jobs) {
      return (
        <small className="text-muted">You have no past jobs to display</small>
      );
    } else {
      return (
        <Col>
          <FullTable
            jobs={this.state.jobs}
            handleRemove={this.handleRemove}
            handleEdit={this.handleEdit}
          />
        </Col>
      );
    }
  }
}
