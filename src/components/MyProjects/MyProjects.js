import "./MyProjects.css";
import React, { useState } from "react";
import AnimatedBtn from "../AnimatedButton/AnimatedBtn";
import { motion, useAnimation } from "framer-motion";
import lr from "../../assets/loansride.jfif";
import fx from "../../assets/fixation.webp";
let box = document.getElementById("root");
let width = box.offsetWidth;
const MyProjects = (props) => {
  const firstBox = useAnimation();
  const firstboxtext = useAnimation();
  const secondBox = useAnimation();
  const secondboxtext = useAnimation();
  const [anim, setanim] = useState([false, false]);
  const startbox = () => {
    setanim([true, anim[1]]);
    if (width > 600) {
      firstBox.start({
        width: "100%",
        maxWidth: 600,
        transition: { duration: 1 },
      });
      firstboxtext.start({
        opacity: 1,
        display: "flex",
        transition: { delay: 0.5 },
      });
      return;
    }
    firstBox.start({
      scale: 0.8,
      width: width,
      margin: 0,
      justifyContent: "flex-start",
      height: 210,
      transition: { duration: 0.5 },
    });
    firstboxtext.start({
      opacity: 1,
      display: "flex",
      transition: { delay: 0.5 },
    });
  };
  const startbox2 = () => {
    setanim([anim[0], true]);
    if (width > 600) {
      secondBox.start({
        width: "100%",
        maxWidth: 600,
        transition: { duration: 1 },
      });
      secondboxtext.start({
        opacity: 1,
        display: "flex",
        transition: { delay: 0.5 },
      });
      return;
    }
    secondBox.start({
      scale: 0.8,
      height: 200,
      justifyContent: "flex-start",
      margin: 0,
      width: width,
      transition: { duration: 0.5 },
    });
    secondboxtext.start({
      opacity: 1,
      display: "flex",
      transition: { delay: 0.5 },
    });
  };
  return (
    <React.Fragment>
      <motion.h1
        className={
          props.darkmode ? "heading themedarktext" : "heading themelighttext"
        }
      >
        Major Projects
      </motion.h1>
      <motion.div className="projectdiv" animate={firstBox} onClick={startbox}>
        <motion.div
          style={{ minWidth: 150, minHeight: 150, overflow: "hidden" }}
        >
          {!anim[0] && (
            <motion.img
              style={{ width: "100%", height: "100%", flex: 1 }}
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
        </motion.div>
        <motion.p
          className={props.darkmode ? "themedarktext" : "themelighttext"}
          style={{
            opacity: 0,
            display: "none",
            padding: 10,
          }}
          animate={firstboxtext}
        >
          {width >= 600 &&
            `Loansride is online banking project that connects banks and people
          offering various types of loans and various offers and services for
          banks and NBFCs.`}
          {width < 600 &&
            `Loansride is online banking project that connects banks and people
          offering various types of loans and services`}
        </motion.p>
      </motion.div>
      <motion.div
        className="projectdiv"
        style={{ marginTop: 20 }}
        animate={secondBox}
        onClick={startbox2}
      >
        <div style={{ minWidth: 150, minHeight: 150, overflow: "hidden" }}>
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
        </div>
        <motion.p
          className={props.darkmode ? "themedarktext" : "themelighttext"}
          style={{
            opacity: 0,
            padding: 10,
            display: "none",
          }}
          animate={secondboxtext}
        >
          {width >= 600 &&
            `Fixation is a mobile application the one can use to avail services for
          your motor vehicles. You can get your vehicle serviced or get a
          mechanic to your doorstep. All solutions for your motor vehicle`}
          {width < 600 &&
            `Fixation is a mobile application the one can use to avail services for
          your motor vehicles. `}
        </motion.p>
      </motion.div>
      <AnimatedBtn darkmode={props.darkmode} message="Contact Me" />
    </React.Fragment>
  );
};
export default MyProjects;
