import "./MyProjects.css";
import React from "react";
import AnimatedBtn from "../AnimatedButton/AnimatedBtn";
import { motion, useAnimation } from "framer-motion";
import lr from "../../assets/loansride.jfif";
let opacity = 0;
const MyProjects = (props) => {
  const firstBox = useAnimation();
  const firstboxtext = useAnimation();
  const startbox = () => {
    firstBox.start({
      width: 600,
      transition: { duration: 0.5 },
    });
    firstboxtext.start({
      opacity: 1,
      transition: { delay: 0.5 },
    });
  };
  return (
    <React.Fragment>
      <motion.div
        className="projectdiv"
        style={{ height: 200, overflow: "hidden", width: 170 }}
        animate={firstBox}
        onHoverStart={startbox}
      >
        <img style={{ width: 150, height: 150 }} src={lr} />
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
      <AnimatedBtn darkmode={props.darkmode} message="Contact Me" />
    </React.Fragment>
  );
};
export default MyProjects;
