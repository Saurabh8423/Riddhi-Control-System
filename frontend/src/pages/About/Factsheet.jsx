import React from "react";
import "./About.css";

const Factsheet = () => {
  return (
    <div className="factsheet">
      <h2>Factsheet</h2>

      <table>
        <tbody>
          <tr><td>Nature of Business</td><td>Manufacturer</td></tr>
          <tr><td>Additional Business</td><td>Factory / Manufacturing</td></tr>
          <tr><td>Company CEO</td><td>Pradeep Katvaru Ravat</td></tr>
          <tr><td>No. of Employees</td><td>Upto 05 People</td></tr>
          <tr><td>GST Registration Date</td><td>05-08-2025</td></tr>
          <tr><td>Firm Type</td><td>Proprietorship</td></tr>
          <tr><td>Annual Turnover</td><td>10 - 50 Lakh</td></tr>
        </tbody>
      </table>
    </div>
  );
};

export default Factsheet;
