import React from "react";
import { Container, Row, Col, Table } from "reactstrap";
import PropTypes from "prop-types";
import moment from "moment";
import Nav from "../dashboard/components/Nav";
import { firestore } from "../../../app/firebase";
import { collectIdsAndDocs, formatDate } from "../../../app/utilities";

const DashTable = props => {
  const jobs = props.jobs;
  return (
    <Col>
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
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Col>
  );
};

const FullTable = props => {
  const { jobs, handleRemove, handleEdit } = props;
  return (
    <Container fluid>
      <Row>
        <Nav />
        <Col>
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
        </Col>
      </Row>
    </Container>
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
    this.unsubscribe = await firestore
      .collection("jobs")
      .onSnapshot(snapshot => {
        const jobs = snapshot.docs.map(collectIdsAndDocs);
        this.setState({ jobs }, console.log(this.state));
      });
  };

  componentWillUnmount = () => {
    this.unsubscribe();
  };

  handleEdit = job => {
    const properties = { ...job };
    console.log("handleEdit fired", job);
    //redirect to new route EditJob component job as props. New form that has an onSubmit function that updates database
  };

  handleRemove = async id => {
    firestore.doc(`jobs/${id}`).delete();
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
              handleEdit={this.handleEdit}
            />
          )}
        </Col>
      );
    }
  }
}
