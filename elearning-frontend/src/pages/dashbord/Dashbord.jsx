import React from "react";
import "./dashbord.css";
import { CourseData } from "../../context/CourseContext";
import CourseCard from "../../components/coursecard/CourseCard";

const Dashbord = () => {
  const { mycourse } = CourseData();
  return (
    <div className="student-dashboard">
      <h2>All courses</h2>
      <div className="dashboard-content">
        {mycourse && mycourse.length > 0 ? (
          mycourse.map((e) => <CourseCard key={e._id} course={e} />)
        ) : (
          <p>No Buy course Yet</p>
        )}
      </div>
    </div>
  );
};

export default Dashbord;
