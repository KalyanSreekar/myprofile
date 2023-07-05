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
        style={{ opacity: 1, marginBottom: 30 }}
      >
        Contact Me
      </motion.h1>
      <motion.div className="datarow">
        <FiPhoneCall
          className={
            props.darkmode
              ? "themedarktext iconStyle"
              : "themelighttext iconStyle"
          }
        />
        <p
          className={props.darkmode ? "themedarktext" : "themelighttext"}
          style={{ marginLeft: 10 }}
        >
          7995917616
        </p>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
        className="datarow"
      >
        <a
          href="mailto:kalyansreekarj@gmail.com"
          target="_blank"
          rel="noreferrer"
          className={props.darkmode ? "themedarktext" : "themelighttext"}
          style={{ display: "flex", borderBottom: 0, alignItems: "flex-end" }}
        >
          <FiMail
            className={
              props.darkmode
                ? "themedarktext iconStyle"
                : "themelighttext iconStyle"
            }
          />
          <p
            className={props.darkmode ? "themedarktext" : "themelighttext"}
            style={{ marginLeft: 10 }}
          >
            kalyansreekarj@gmail.com
          </p>
        </a>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
        className="datarow"
      >
        <a
          href="https://www.linkedin.com/in/kalyansreekarj/"
          target="_blank"
          rel="noreferrer"
          className={props.darkmode ? "themedarktext" : "themelighttext"}
          style={{ display: "flex", borderBottom: 0, alignItems: "flex-end" }}
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
