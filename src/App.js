// imports
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import Loading from "";

// components
const Main = lazy(() => import("./components/Main"));
const AboutPage = lazy(() => import("./components/AboutPage"));
const ResumePage = lazy(() => import("./components/ResumePage"));
const WorkPage = lazy(() => import("./components/WorkPage"));
const ContactPage = lazy(() => import("./components/ContactPage"));
const SoundBar = lazy(() => import(""));

function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
        <Suspense fallback={<Loading />}>
          <SoundBar />

          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={Main} />

              <Route exact path="/about" component={AboutPage} />

              <Route exact path="/resume" component={ResumePage} />

              <Route exact path="/work" component={WorkPage} />

              <Route exact path="/contact" component={ContactPage} />
            </Switch>
          </AnimatePresence>
        </Suspense>
      </ThemeProvider>
    </>
  );
}

export default App;
