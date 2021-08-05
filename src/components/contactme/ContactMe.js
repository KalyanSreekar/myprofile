import "./conactStyles.css";
import React from "react";
import { motion } from "framer-motion";
import { FiPhoneCall } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiHome } from "react-icons/fi";
import AnimatedBtn from "../AnimatedButton/AnimatedBtn";
const ContactMe = (props) => {
  return (
    <React.Fragment>
      <motion.h1
        className={props.darkmode ? "themedarktext" : "themelighttext"}
        style={{ opacity: 1 }}
      >
        Contact Me
      </motion.h1>
      <motion.div className="datarow">
        <FiPhoneCall
          className={props.darkmode ? "themedarktext" : "themelighttext"}
          style={{
            width: "25px",
            height: "25px",
          }}
        />
        <p
          className={props.darkmode ? "themedarktext" : "themelighttext"}
          style={{ marginLeft: 10 }}
        >
          7995917616
        </p>
      </motion.div>
      <motion.div className="datarow">
        <FiMail
          className={
            props.darkmode
              ? "themedarktext iconStyle"
              : "themelighttext iconStyle"
          }
          style={{
            width: "25px",
            height: "25px",
          }}
        />
        <p
          className={props.darkmode ? "themedarktext" : "themelighttext"}
          style={{ marginLeft: 10 }}
        >
          kalyansreekarj@gmail.com
        </p>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
        className="datarow"
      >
        <a
          href="https://www.linkedin.com/in/kalyan-sreekar-jhade-818063184/"
          target="_blank"
          rel="noreferrer"
          className={props.darkmode ? "themedarktext" : "themelighttext"}
          style={{ display: "flex", borderBottom: 0 }}
        >
          <p className={props.darkmode ? "themedarktext" : "themelighttext"}>
            {"Explore my Linked \t"}
          </p>
          <FiLinkedin
            className={
              props.darkmode
                ? "themedarktext iconStyle"
                : "themelighttext iconStyle"
            }
            style={{
              width: "25px",
              height: "25px",
            }}
          />
        </a>
      </motion.div>
      <motion.div className="datarow">
        <FiHome
          className={
            props.darkmode
              ? "themedarktext iconStyle"
              : "themelighttext iconStyle"
          }
          style={{
            width: "25px",
            height: "25px",
          }}
        />
        <p
          className={props.darkmode ? "themedarktext" : "themelighttext"}
          style={{ marginLeft: 10 }}
        >
          Hyderabad, Telangana, India
        </p>
      </motion.div>
      <AnimatedBtn darkmode={props.darkmode} message="Home" />
    </React.Fragment>
  );
};
export default ContactMe;
