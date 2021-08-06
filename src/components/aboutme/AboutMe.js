import React, { useContext } from "react";
import { motion, useAnimation } from "framer-motion";
import AnimatedBtn from "../AnimatedButton/AnimatedBtn";
import Context from "../../context/app-context";
import "./aboutme.css";
const AboutMe = (props) => {
  const ctx = useContext(Context);
  const anime1 = useAnimation();
  const anime2 = useAnimation();
  const heading1 = useAnimation();
  const heading2 = useAnimation();
  const button = useAnimation();
  if (ctx.aboutme) {
    heading1.start({
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.4,
      },
    });
    heading2.start({
      opacity: 1,
      transition: {
        delay: 0.9,
        duration: 0.4,
      },
    });
    anime1.start({
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.4,
      },
    });
    anime2.start({
      opacity: 1,
      transition: {
        delay: 1.1,
        duration: 0.4,
      },
    });
    button.start({
      opacity: 1,
      transition: {
        delay: 1.3,
        duration: 0.4,
      },
    });
  }

  return (
    <div className="container">
      <motion.h1
        style={{ marginTop: -40 }}
        animate={heading1}
        className={props.darkmode ? "dark" : "light"}
      >
        About Me
      </motion.h1>
      <motion.p
        style={{ padding: 20, opacity: 0 }}
        animate={anime1}
        className={props.darkmode ? "dark" : "light"}
      >
        Hi! I am Fullstack developer currently working at visiram solutions. My
        passion for programming started when I started playing games when I was
        young and it grew since then. I am looking forward to work in big and
        challenging projects and have fun along the way.
      </motion.p>
      <motion.h1
        animate={heading2}
        className={props.darkmode ? "dark" : "light"}
        style={{ marginTop: 10, marginBottom: 10 }}
      >
        Core Skills
      </motion.h1>
      <motion.div style={{ opacity: 0 }} animate={anime2}>
        <div className="skills">
          <motion.p className={props.darkmode ? "row dark" : "row light"}>
            React JS
          </motion.p>
          <motion.p className={props.darkmode ? "row dark" : "row light"}>
            Angular
          </motion.p>
          <motion.p className={props.darkmode ? "row dark" : "row light"}>
            React Native
          </motion.p>
          <motion.p className={props.darkmode ? "row dark" : "row light"}>
            Node JS
          </motion.p>
        </div>
        <div className="skills">
          <motion.p className={props.darkmode ? "row dark" : "row light"}>
            Python
          </motion.p>
          <motion.p className={props.darkmode ? "row dark" : "row light"}>
            Java
          </motion.p>
          <motion.p className={props.darkmode ? "row dark" : "row light"}>
            Data Structures
          </motion.p>
          <motion.p className={props.darkmode ? "row dark" : "row light"}>
            SQL
          </motion.p>
        </div>
      </motion.div>
      <motion.div
        style={{
          opacity: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        animate={button}
      >
        <AnimatedBtn darkmode={props.darkmode} message="Projects" />
      </motion.div>
    </div>
  );
};
export default AboutMe;
