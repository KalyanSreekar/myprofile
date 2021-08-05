import "./MyProjects.css";
import React, { useState } from "react";
import AnimatedBtn from "../AnimatedButton/AnimatedBtn";
import { motion, useAnimation } from "framer-motion";
import lr from "../../assets/loansride.jfif";
import fx from "../../assets/fixation.webp";
const MyProjects = (props) => {
  const firstBox = useAnimation();
  const firstboxtext = useAnimation();
  const secondBox = useAnimation();
  const secondboxtext = useAnimation();
  const [anim, setanim] = useState([false, false]);
  const startbox = () => {
    setanim([true, anim[1]]);
    firstBox.start({
      width: 600,
      transition: { duration: 0.5 },
    });
    firstboxtext.start({
      opacity: 1,
      transition: { delay: 0.5 },
    });
  };
  const startbox2 = () => {
    setanim([anim[0], true]);
    secondBox.start({
      width: 600,
      transition: { duration: 0.5 },
    });
    secondboxtext.start({
      opacity: 1,
      transition: { delay: 0.5 },
    });
  };
  return (
    <React.Fragment>
      <motion.h1
        style={{
          opacity: 1,
          marginBottom: 50,
          padding: 0,
          marginTop: -50,
        }}
        className={props.darkmode ? "themedarktext" : "themelighttext"}
      >
        Major Projects
      </motion.h1>
      <motion.div
        className="projectdiv"
        style={{
          height: 150,
          overflow: "hidden",
          width: 150,
          display: "flex",
          alignItems: "center",
          marginBottom: 30,
          cursor: "pointer",
        }}
        animate={firstBox}
        onClick={startbox}
      >
        {!anim[0] && (
          <motion.img
            style={{ width: 150, height: 150 }}
            src={lr}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.4 }}
            alt="Loansride logo"
          />
        )}
        {anim[0] && (
          <img
            style={{ width: 150, height: 150 }}
            src={lr}
            alt="Loansride logo"
          />
        )}
        <motion.p
          className={props.darkmode ? "themedarktext" : "themelighttext"}
          style={{ opacity: 0, marginLeft: 10 }}
          animate={firstboxtext}
        >
          Loansride is online banking project that connects banks and people
          offering various types of loans and various offers and services for
          banks and NBFCs.
        </motion.p>
      </motion.div>
      <motion.div
        className="projectdiv"
        style={{
          height: 150,
          overflow: "hidden",
          width: 150,
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
        animate={secondBox}
        onClick={startbox2}
      >
        {!anim[1] && (
          <motion.img
            style={{ width: 150, height: 150 }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.4 }}
            src={fx}
            alt="Fixation logo"
          />
        )}
        {anim[1] && (
          <motion.img
            style={{ width: 150, height: 150 }}
            src={fx}
            alt="Fixation logo"
          />
        )}
        <motion.p
          className={props.darkmode ? "themedarktext" : "themelighttext"}
          style={{ opacity: 0, marginLeft: 10 }}
          animate={secondboxtext}
        >
          Fixation is a mobile application the one can use to avail services for
          your motor vehicles. You can get your vehicle serviced or get a
          mechanic to your doorstep. All solutions for your motor vehicle
        </motion.p>
      </motion.div>
      <AnimatedBtn darkmode={props.darkmode} message="Contact Me" />
    </React.Fragment>
  );
};
export default MyProjects;
