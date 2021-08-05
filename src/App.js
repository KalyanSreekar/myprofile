import "./App.css";
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import HomePage from "./components/HomePage";
import ThemeChanger from "./components/ThemeChanger";
import AboutMe from "./components/aboutme/AboutMe";
import Context from "./context/app-context";
import MyProjects from "./components/MyProjects/MyProjects";
import ContactMe from "./components/contactme/ContactMe";

let toofast = false;
function App() {
  const [darkmode, setdarkmode] = useState(true);
  const [housepage, sethousepage] = useState(true);
  const [aboutme, setaboutme] = useState(false);
  const [myprojects, setmyprojects] = useState(false);
  const [contactme, setcontactme] = useState(false);
  const homepage = useAnimation();
  const aboutmepage = useAnimation();
  const projectpage = useAnimation();
  const contactpage = useAnimation();
  const wheel = ({ deltaY }) => {
    if (toofast) return;
    if (deltaY > 0) {
      if (myprojects) {
        changepagetotop2();
        setcontactme(true);
        setmyprojects(false);
      } else if (aboutme) {
        changepagetotop1();
        setmyprojects(true);
        setaboutme(false);
      } else if (housepage) {
        changepagetotop();
        setaboutme(true);
        sethousepage(false);
      } else return;
    }
    if (deltaY < 0) {
      if (contactme) {
        changepagetobottom2();
        setcontactme(false);
        setmyprojects(true);
      } else if (myprojects) {
        changepagetobottom1();
        setmyprojects(false);
        setaboutme(true);
      } else if (aboutme) {
        changepagetobottom();
        setaboutme(false);
        sethousepage(true);
      } else return;
    }
    toofast = true;
    setTimeout(() => {
      toofast = false;
    }, 800);
  };
  const aboutmechanger = () => {
    changepagetotop();
    setaboutme(true);
  };
  const myprojectschanger = () => {
    setmyprojects(true);
  };
  const contactmechanger = () => {
    setcontactme(true);
  };
  const changepagetotop = () => {
    homepage.start({
      height: 0,
      opacity: -1,
      transition: {
        duration: 0.6,
      },
    });
    aboutmepage.start({
      height: "100vh",
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    });
  };
  const changepagetotop1 = () => {
    aboutmepage.start({
      height: 0,
      opacity: -1,
      transition: {
        duration: 0.6,
      },
    });
    projectpage.start({
      height: "100vh",
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    });
  };
  const changepagetotop2 = () => {
    contactpage.start({
      height: "100vh",
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    });
    projectpage.start({
      height: 0,
      opacity: -1,
      transition: {
        duration: 0.6,
      },
    });
  };
  const changepagetobottom = () => {
    homepage.start({
      height: "100vh",
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    });
    aboutmepage.start({
      height: 0,
      opacity: -1,
      transition: {
        duration: 0.6,
      },
    });
  };
  const changepagetobottom1 = () => {
    aboutmepage.start({
      height: "100vh",
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    });
    projectpage.start({
      height: 0,
      opacity: -1,
      transition: {
        duration: 0.6,
      },
    });
  };
  const changepagetobottom2 = () => {
    contactpage.start({
      height: 0,
      opacity: -1,
      transition: {
        duration: 0.6,
      },
    });
    projectpage.start({
      height: "100vh",
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    });
  };
  const changedarkmode = () => {
    setdarkmode(!darkmode);
  };
  const clickHandler = () => {
    // console.log("homepage " + housepage);
    // console.log("about me " + aboutme);
    // console.log("my projects " + myprojects);
    // console.log("contact me " + contactme);
    if (housepage) {
      setaboutme(true);
      sethousepage(false);
      changepagetotop();
    } else if (aboutme) {
      setmyprojects(true);
      setaboutme(false);
      changepagetotop1();
    } else if (myprojects) {
      setcontactme(true);
      setmyprojects(false);
      changepagetotop2();
    } else {
      sethousepage(true);
      setcontactme(false);
      contactpage.start({
        height: 0,
        opacity: -1,
        transition: {
          duration: 0.6,
        },
      });
      homepage.start({
        height: "100vh",
        opacity: 1,
        transition: {
          duration: 0.6,
        },
      });
    }
  };
  return (
    <Context.Provider
      value={{
        darkmode: darkmode,
        homepage: housepage,
        myprojects: myprojects,
        contactme: contactme,
        aboutme: aboutme,
        changeaboutme: aboutmechanger,
        changemyprojects: myprojectschanger,
        changecontactme: contactmechanger,
        clickHandler: clickHandler,
      }}
    >
      <ThemeChanger darkmode={darkmode} changemode={changedarkmode} />
      <div
        onWheel={(e) => wheel(e)}
        className={darkmode ? "maindiv themedark" : "maindiv themelight"}
      >
        <motion.div
          animate={homepage}
          className={darkmode ? "App themedark" : "App themelight"}
        >
          <HomePage pagechange={changepagetotop} darkmode={darkmode} />
        </motion.div>
        <motion.div
          className={darkmode ? "App1 themedark" : "App1 themelight"}
          animate={aboutmepage}
        >
          <AboutMe darkmode={darkmode} />
        </motion.div>
        <motion.div
          className={darkmode ? "App1 themedark" : "App1 themelight"}
          animate={projectpage}
        >
          <MyProjects darkmode={darkmode} />
        </motion.div>
        <motion.div
          className={darkmode ? "App1 themedark" : "App1 themelight"}
          animate={contactpage}
        >
          <ContactMe darkmode={darkmode} />
        </motion.div>
      </div>
    </Context.Provider>
  );
}

export default App;
