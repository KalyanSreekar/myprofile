import "./App.css";
import reactDom from "react-dom";
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
  const [menuicon, setmenuicon] = useState(false);
  const homepage = useAnimation();
  const aboutmepage = useAnimation();
  const projectpage = useAnimation();
  const contactpage = useAnimation();
  const menuline1 = useAnimation();
  const menuline2 = useAnimation();
  const menuline3 = useAnimation();
  const sideBar = useAnimation();
  const sideBarMenu = useAnimation();
  const sidebardata = useAnimation();
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
  const menuiconHandler = () => {
    if (!menuicon) {
      menuline1.start({
        rotateZ: 45,
        originX: 0,
        transition: {
          duration: 0.4,
        },
      });
      menuline2.start({
        opacity: 0,
        transition: {
          duration: 0.4,
        },
      });
      menuline3.start({
        rotateZ: -45,
        originX: 0,
        transition: {
          duration: 0.4,
        },
      });
      sideBarMenu.start({
        marginTop: "19px",
        marginRight: "19px",
        transition: {
          duration: 0.4,
        },
      });
      sideBar.start({
        width: 300,
        height: "100vh",
        marginTop: "0px",
        marginLeft: "0px",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        borderRadius: "0%",
        transition: {
          duration: 0.4,
        },
      });
      sidebardata.start({
        display: "flex",
        opacity: 1,
        marginTop: "60px",
        transition: { delay: 0.3 },
        width: 260,
      });
      setmenuicon(true);
    } else {
      sidebardata.start({
        display: "none",
        opacity: 0,
        marginTop: "40px",
        transition: { duration: 0.5 },
      });
      menuline1.start({
        rotateZ: 0,
        originX: 0,
        transition: {
          duration: 0.4,
        },
      });
      menuline2.start({
        opacity: 1,
        transition: {
          duration: 0.4,
        },
      });
      menuline3.start({
        rotateZ: 0,
        originX: 0,
        transition: {
          duration: 0.4,
        },
      });
      sideBarMenu.start({
        marginTop: "0px",
        marginRight: "0px",
        transition: { delay: 0.2 },
      });
      sideBar.start({
        width: 50,
        height: 50,
        marginTop: "20px",
        marginLeft: "20px",
        padding: "0px",
        borderRadius: "50%",
        transition: {
          duration: 0.3,
        },
      });
      sideBar.start({
        alignItems: "center",
        justifyContent: "center",
        transition: { delay: 0.3 },
      });
      setmenuicon(false);
    }
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
  const sidebarclickedhome = () => {
    if (housepage) return;
    if (aboutme) {
      setaboutme(false);
      aboutmepage.start({
        height: 0,
        opacity: -1,
        transition: {
          duration: 0.6,
        },
      });
    } else if (myprojects) {
      setmyprojects(false);
      projectpage.start({
        height: 0,
        opacity: -1,
        transition: {
          duration: 0.6,
        },
      });
    } else {
      setcontactme(false);
      contactpage.start({
        height: 0,
        opacity: -1,
        transition: {
          duration: 0.6,
        },
      });
    }
    sethousepage(true);
    homepage.start({
      height: "100vh",
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    });
    menuiconHandler();
  };
  const sidebarclickedaboutme = () => {
    if (aboutme) return;
    if (housepage) {
      sethousepage(false);
      homepage.start({
        height: 0,
        opacity: -1,
        transition: {
          duration: 0.6,
        },
      });
    } else if (myprojects) {
      setmyprojects(false);
      projectpage.start({
        height: 0,
        opacity: -1,
        transition: {
          duration: 0.6,
        },
      });
    } else {
      setcontactme(false);
      contactpage.start({
        height: 0,
        opacity: -1,
        transition: {
          duration: 0.6,
        },
      });
    }
    setaboutme(true);
    aboutmepage.start({
      height: "100vh",
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    });
    menuiconHandler();
  };
  const sidebarclickedprojects = () => {
    if (myprojects) return;
    if (housepage) {
      sethousepage(false);
      homepage.start({
        height: 0,
        opacity: -1,
        transition: {
          duration: 0.6,
        },
      });
    } else if (aboutme) {
      setaboutme(false);
      aboutmepage.start({
        height: 0,
        opacity: -1,
        transition: {
          duration: 0.6,
        },
      });
    } else {
      setcontactme(false);
      contactpage.start({
        height: 0,
        opacity: -1,
        transition: {
          duration: 0.6,
        },
      });
    }
    setmyprojects(true);
    projectpage.start({
      height: "100vh",
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    });
    menuiconHandler();
  };
  const sidebarclickedcontactme = () => {
    if (contactme) return;
    if (housepage) {
      sethousepage(false);
      homepage.start({
        height: 0,
        opacity: -1,
        transition: {
          duration: 0.6,
        },
      });
    } else if (aboutme) {
      setaboutme(false);
      aboutmepage.start({
        height: 0,
        opacity: -1,
        transition: {
          duration: 0.6,
        },
      });
    } else {
      setmyprojects(false);
      projectpage.start({
        height: 0,
        opacity: -1,
        transition: {
          duration: 0.6,
        },
      });
    }
    setcontactme(true);
    contactpage.start({
      height: "100vh",
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    });
    menuiconHandler();
  };
  return (
    <div>
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
        {reactDom.createPortal(
          <div className="errormsg">
            <h2 style={{ textAlign: "center", color: "white" }}>
              This website is not supported in your screen size
            </h2>
          </div>,
          document.getElementById("uncompatablescreen")
        )}
        <motion.div
          animate={sideBar}
          className={darkmode ? "sideBar themelight" : "sideBar themedark"}
        >
          <motion.div
            animate={sideBarMenu}
            onClick={menuiconHandler}
            className="menu"
          >
            <motion.div
              animate={menuline1}
              className={
                darkmode ? "menuLine themedark" : "menuLine themelight"
              }
            />
            <motion.div
              animate={menuline2}
              className={
                darkmode ? "menuLine themedark" : "menuLine themelight"
              }
              style={{ marginTop: 8 }}
            />
            <motion.div
              animate={menuline3}
              className={
                darkmode ? "menuLine themedark" : "menuLine themelight"
              }
              style={{ marginTop: 16 }}
            />
          </motion.div>
          <motion.div
            animate={sidebardata}
            style={{
              flexDirection: "column",
              position: "absolute",
              display: "none",
              opacity: 0,
              width: "180px",
              alignItems: "flex-start",
            }}
          >
            <motion.p
              whileHover={{ scale: 1.2 }}
              onClick={sidebarclickedhome}
              className={
                darkmode
                  ? "themelighttext sidebaroption"
                  : "themedarktext sidebaroption"
              }
            >
              Home
            </motion.p>
            <motion.p
              onClick={sidebarclickedaboutme}
              whileHover={{ scale: 1.2 }}
              className={
                darkmode
                  ? "themelighttext sidebaroption"
                  : "themedarktext sidebaroption"
              }
            >
              About Me
            </motion.p>
            <motion.p
              onClick={sidebarclickedprojects}
              whileHover={{ scale: 1.2 }}
              className={
                darkmode
                  ? "themelighttext sidebaroption"
                  : "themedarktext sidebaroption"
              }
            >
              Projects
            </motion.p>
            <motion.p
              onClick={sidebarclickedcontactme}
              whileHover={{ scale: 1.2 }}
              className={
                darkmode
                  ? "themelighttext sidebaroption"
                  : "themedarktext sidebaroption"
              }
            >
              Contact Me
            </motion.p>
          </motion.div>
        </motion.div>
        <ThemeChanger darkmode={darkmode} changemode={changedarkmode} />
        <div
          onWheel={(e) => wheel(e)}
          className={darkmode ? "maindiv themedark" : "maindiv themelight"}
        >
          <motion.div
            animate={homepage}
            className={darkmode ? "App themedark" : "App themelight"}
          >
            <HomePage darkmode={darkmode} />
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
            className={darkmode ? "App themedark" : "App themelight"}
            animate={contactpage}
          >
            <ContactMe darkmode={darkmode} />
          </motion.div>
        </div>
      </Context.Provider>
    </div>
  );
}

export default App;
