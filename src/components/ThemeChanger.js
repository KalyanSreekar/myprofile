import { motion } from "framer-motion";
import { BiSun } from "react-icons/bi";
import { BsMoon } from "react-icons/bs";
const ThemeChanger = (props) => {
  return (
    <motion.div
      className={
        props.darkmode
          ? "themechanger themedarkselector"
          : "themechanger themelightselector"
      }
      style={{ zIndex: 100 }}
      whileHover={{ scale: 1.5 }}
      whileTap={{ scale: 1 }}
      onClick={props.changemode}
    >
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        {props.darkmode ? (
          <BiSun style={{ color: "red", width: "25px", height: "25px" }} />
        ) : (
          <BsMoon style={{ color: "white", width: "25px", height: "25px" }} />
        )}
      </motion.div>
    </motion.div>
  );
};
export default ThemeChanger;
