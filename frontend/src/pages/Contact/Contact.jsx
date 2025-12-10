import React, { useState } from "react";
import "./Contact.css";
import { FaMapMarkerAlt, FaUser, FaPhone, FaArrowRight } from "react-icons/fa";

const ContactPage = () => {
  const [step, setStep] = useState("form");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mobile.length !== 10) {
      alert("Enter a valid 10-digit mobile number");
      return;
    }
    setStep("otp"); // move to OTP step
  };

  const handleOtpVerify = (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      alert("Enter valid 6-digit OTP");
      return;
    }
    alert("OTP Verified Successfully!");
    setStep("done");
  };

  return (
    <div className="contact-page">
      {/* LEFT SECTION */}
      <div className="contact-left">
        <h2>Reach Us</h2>

        <div className="info-box">
          <FaMapMarkerAlt className="icon" />
          <p>
            <strong>Riddhi Control Systems</strong>
            <br />
            Golani Naka, Vasai East, Vasai-Virar,
            <br />
            Mumbai - 401208, Maharashtra, India.
          </p> 
        </div>
        <a href="https://maps.app.goo.gl/fqJ7du1uMm3Ws26o8" className="map-link">📌 Get Directions</a>

        <div className="info-box">
          <FaUser className="icon" />
          <p>Mr. Pradeep Katvaru Ravat (Owner)</p>
        </div>

        <div className="info-box">
          <FaPhone className="icon" />
          <p className="view-mobile">9172099438</p>
        </div>

        <div className="btn-row">
            <button className="btn sms-btn">💬 Send SMS</button>
            <button className="btn email-btn">📧 Send Email</button>
          </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="contact-right">
        <h2>Contact Us</h2>

        {step === "form" && (
          <form onSubmit={handleSubmit} className="contact-form">
            <input type="text" placeholder="Your Name" required />

            <input
              type="number"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />

            <button type="submit" className="submit-btn">
              Submit <FaArrowRight />
            </button>
          </form>
        )}

        {step === "otp" && (
          <form onSubmit={handleOtpVerify} className="contact-form">
            <input
              type="number"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />

            <button type="submit" className="submit-btn">
              Verify OTP <FaArrowRight />
            </button>
          </form>
        )}

        {step === "done" && (
          <h3 className="success-msg">You are successfully registered ✔</h3>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
