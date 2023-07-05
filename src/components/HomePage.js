import "../App.css";
import React from "react";
import { motion } from "framer-motion";
import kalyan1 from "../assets/kalyan1.jpg";
import AnimatedBtn from "./AnimatedButton/AnimatedBtn";

const names = "Kalyan  Sreekar  J";
const profes = "Fullstack  Developer";
const name = names.split("");
const profession = profes.split("");
const HomePage = (props) => {
  return (
    <React.Fragment>
      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 0.4 }}
        alt="my pic"
        src={kalyan1}
        className="myimage"
      />
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
        {name.map((letter) => {
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
        })}
      </motion.div>
      <motion.div
        style={{
          display: "flex",
        }}
        initial={{ opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {profession.map((letter) => {
          return (
            <motion.p
              key={Math.random()}
              initial={{ opacity: 1, marginTop: 10 }}
              animate={{ scale: 1.4, opacity: 1, originX: 0 }}
              transition={{ duration: 0.2, type: "spring", stiffness: 500 }}
              whileTap={{
                scale: 1,
                rotateX: 180,
                rotateY: 180,
                rotateZ: 180,
              }}
              whileHover={{ scale: 2 }}
              className={
                props.darkmode
                  ? "eachletter themedarktext"
                  : "eachletter themelighttext"
              }
            >
              {letter}
            </motion.p>
          );
        })}
      </motion.div>
      <AnimatedBtn darkmode={props.darkmode} message="About Me" />
    </React.Fragment>
  );
};
export default HomePage;
