import React from "react";
import MainScreen from "../../Components/MainScreen/MainScreen";
import { Container } from "react-bootstrap";
import '../JobPage/JobPage.css';

const JobPage = () => {
  return (
    <>
      <MainScreen title="Job Positions" />
      <Container>
      <div classname="container">
      <div className="career-job-page">
      <h1>Software Engineer</h1>
      <p>Job Description</p>
      <ul>
        <li>Requirement 1</li>
        <li>Requirement 2</li>
        <li>Requirement 3</li>
      </ul>
      <button>Apply Now</button>
    </div>
    <div className="career-job-page">
      <h1>Web Designer</h1>
      <p>Job Description</p>
      <ul>
        <li>Requirement 1</li>
        <li>Requirement 2</li>
        <li>Requirement 3</li>
      </ul>
      <button>Apply Now</button>
    </div>
    <div className="career-job-page">
      <h1>Designer</h1>
      <p>Job Description</p>
      <ul>
        <li>Requirement 1</li>
        <li>Requirement 2</li>
        <li>Requirement 3</li>
      </ul>
      <button>Apply Now</button>
    </div>
    </div>
      </Container>
    </>
  );
};

export default JobPage;
