import "./animebtn.css";
import React, { useContext } from "react";
import { motion, useAnimation } from "framer-motion";
import Context from "../../context/app-context";

let t = null;
let status = false;
let onbtn = false;
const AnimatedBtn = (props) => {
  const arrowanimation1 = useAnimation();
  const arrowanimation2 = useAnimation();
  const arrowanimation3 = useAnimation();
  const ctx = useContext(Context);
  const startanime = () => {
    if (status) return;
    status = true;
    arrowanimation1.start({
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    });
    setTimeout(() => {
      arrowanimation1.start({
        opacity: 0,
        transition: {
          duration: 0.4,
        },
      });
    }, 400);
    arrowanimation2.start({
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 0.2,
      },
    });
    setTimeout(() => {
      arrowanimation2.start({
        opacity: 0,
        transition: {
          duration: 0.4,
        },
      });
    }, 600);
    arrowanimation3.start({
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 0.4,
      },
    });
    setTimeout(() => {
      arrowanimation3.start({
        opacity: 0,
        transition: {
          duration: 0.4,
        },
      });
    }, 800);
    setTimeout(() => {
      status = false;
      if (onbtn) startanime();
    }, 1150);
    t = setTimeout(() => {
      startanime();
    }, 1200);
  };

  return (
    <React.Fragment>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        onClick={ctx.clickHandler}
        onHoverStart={() => {
          startanime();
          onbtn = true;
        }}
        onHoverEnd={() => {
          clearTimeout(t);
          onbtn = false;
        }}
        whileHover={
          props.darkmode
            ? {
                boxShadow: "0 0 20px #929292,0 0 40px #929292,0 0 80px #929292",
              }
            : {
                boxShadow: "0 0 20px #777777,0 0 40px #777777,0 0 80px #777777",
              }
        }
        transition={{ duration: 0.5 }}
        className={props.darkmode ? "nextSlideButton" : "nextSlideButtonlight"}
      >
        <motion.p
          className={props.darkmode ? "nextslidetext" : "nextslidetextlight"}
        >
          {props.message}
        </motion.p>
      </motion.div>
      {!ctx.contactme && (
        <motion.div
          initial={{ height: 0 }}
          transition={{ delay: 0.5 }}
          onClick={ctx.clickHandler}
          className="downarrowsdiv"
        >
          <motion.div
            animate={arrowanimation1}
            className={props.darkmode ? "arrow" : "arrowlight"}
          ></motion.div>
          <motion.div
            animate={arrowanimation2}
            className={props.darkmode ? "arrow" : "arrowlight"}
          ></motion.div>
          <motion.div
            animate={arrowanimation3}
            className={props.darkmode ? "arrow" : "arrowlight"}
          ></motion.div>
        </motion.div>
      )}
    </React.Fragment>
  );
};

export default AnimatedBtn;
