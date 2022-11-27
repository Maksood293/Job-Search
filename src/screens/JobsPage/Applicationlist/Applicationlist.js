import React from "react";
import { Card } from "../../../components/Card/Card";
import { Modal } from "../../../components/Modal/Modal";
import "./Applicationlist.scss";
import curriculum from "../../../assets/curriculum.svg";

export const Applicationlist = ({
  setOpenModal,
  applications,
  loading,
  message,
}) => {
  return (
    <Modal handleClose={() => setOpenModal(false)}>
      <div className="header-title">
        <p>Applicants for this job</p>
      </div>
      <br />
      <p>Total {applications.length || 0} applications</p>
      <div>
        <div className={message ? "empty-card" : "application-card"}>
          {loading ? <h1>Loading...........</h1> : null}
          {applications.length > 0 ? (
            applications.map((application) => (
              <Card>
                <div className="card-header">
                  <p className="avatar">{application.name.slice(0, 1)}</p>
                  <div className="user-data">
                    <h3>{application.name}</h3>
                    <p>{application.email}</p>
                  </div>
                </div>
                <div className="card-skill">
                  <h3>Skills</h3>
                  <p>{application.skills}</p>
                </div>
              </Card>
            ))
          ) : (
            <div className="empty-application">
              <img src={curriculum} alt="curriculum" />
              <h3>{message}</h3>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default Applicationlist;
