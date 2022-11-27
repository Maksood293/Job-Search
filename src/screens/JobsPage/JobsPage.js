import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listJobs } from "../../actions/jobListAction";
import { Card } from "../../components/Card/Card";
import "./JobsPage.scss";
import Home from "../../assets/ionic-md-home.svg";
import { Link } from "react-router-dom";
import Location from "../../assets/material-location-on.svg";
import { Button } from "../../components/Button/Button";
import { Pagination } from "../../components/Pagination/Pagination";
import { applicationListAction } from "../../actions/applicationAction";
import Applicationlist from "./Applicationlist/Applicationlist";
import writing from "../../assets/writing.svg";
import { Modal } from "../../components/Modal/Modal";

export const JobsPage = (props) => {
  const dispatch = useDispatch();
  const jobsList = useSelector((state) => state.jobList);
  const { jobs, loading } = jobsList;
  const userSingin = useSelector((state) => state.userSingin);
  const { userInfo } = userSingin;
  const [pageNumber, setPageNumber] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const applicationList = useSelector((state) => state.jobApplication);
  const [signin, setSignin] = useState(false);
  const {
    applications,
    loading: applicationLoading,
    message,
  } = applicationList;

  useEffect(() => {
    if (userInfo) {
      dispatch(listJobs(pageNumber));
    } else {
      props.history.push("/");
    }
  }, [userInfo, dispatch, props.history, pageNumber]);

  useEffect(() => {
    if (userInfo) {
      setSignin(true);
    }
  }, []);

  const ViewApplication = (id) => {
    setOpenModal(true);
    dispatch(applicationListAction(id));
  };

  return (
    <div className="job-container">
      <div className="head-content">
        <Link to="/">
          <p>
            <img src={Home} alt="home-icon" /> <span>Home</span>
          </p>
        </Link>
        <h1>Jobs posted by you</h1>
      </div>
      <div className="job-card">
        {loading ? <h1>Loading...........</h1> : null}
        {jobs && jobs.length > 0 ? (
          jobs.map((jobList) => (
            <Card key={jobList.id}>
              <div className="card-header">
                <h4>{jobList.title}</h4>
              </div>
              <div className="card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt…
                </p>
              </div>
              <div className="card-footer">
                <img src={Location} alt="location" />
                <p>{jobList.location}</p>
                <Button
                  variant="light"
                  onClick={() => ViewApplication(jobList.id)}
                >
                  View Applications
                </Button>
              </div>
            </Card>
          ))
        ) : (
          <div className="empty-jobs">
            <img src={writing} alt="writing" />
            <h1>Your posted jobs will show here!</h1>
            <Button variant="primary">Post a Job</Button>
          </div>
        )}
      </div>
      {jobs?.length > 1 ? (
        <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
      ) : null}
      {openModal && (applications || message) ? (
        <Applicationlist
          setOpenModal={setOpenModal}
          applications={applications}
          loading={applicationLoading}
          message={message}
        />
      ) : null}

      {signin ? (
        <div className="signin-modal">
          {" "}
          <Modal handleClose={() => setSignin(false)}>
            <h2>Login</h2>
            <p>You have successfully logged in.</p>
          </Modal>
        </div>
      ) : null}
    </div>
  );
};
