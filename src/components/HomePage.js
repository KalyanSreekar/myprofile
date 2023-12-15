import "../App.css";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import kalyan1 from "../assets/kalyan1.jpg";
import kalyan2 from "../assets/kalyan2.jpg";
import kalyan3 from "../assets/kalyan3.jpg";
import AnimatedBtn from "./AnimatedButton/AnimatedBtn";

const names = "Kalyan  Sreekar  J";
const profes = "Frontend  Developer";
const name = names.split("");
const profession = profes.split("");
const Image = [kalyan1, kalyan2, kalyan3][Math.floor(Math.random() * 3)];
const HomePage = (props) => {
  const getAnimatedName = (name) => {
    return name.map((letter) => {
      return (
        <motion.p
          key={Math.random()}
          initial={{ opacity: 0, marginTop: 10 }}
          animate={{ scale: 1.4, opacity: 1, originX: 0 }}
          transition={{ duration: 0.2, type: "spring", stiffness: 500 }}
          whileHover={{ scale: 2 }}
          whileTap={{
            scale: 1,
            rotateX: 180,
            rotateY: 180,
            rotateZ: 180,
          }}
          className={
            props.darkmode
              ? "eachletter themedarktext"
              : "eachletter themelighttext"
          }
        >
          {letter}
        </motion.p>
      );
    });
  };
  return (
    <React.Fragment>
      <div className="profileImg" />
      {/* <motion.img
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 0.4 }}
        alt="my pic"
        src={Image}
        className="myimage"
      /> */}
      <motion.div
        style={{
          display: "flex",
        }}
        initial={{ opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {useMemo(() => getAnimatedName(name), [props.darkmode])}
      </motion.div>
      <motion.div
        style={{
          display: "flex",
        }}
        initial={{ opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {useMemo(() => getAnimatedName(profession), [props.darkmode])}
      </motion.div>
      <AnimatedBtn darkmode={props.darkmode} message="About Me" />
    </React.Fragment>
  );
};
export default HomePage;
