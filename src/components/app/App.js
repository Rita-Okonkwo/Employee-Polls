import Login from "../login/Login";
import { connect } from "react-redux";
import { useEffect } from "react";
import { useStyles } from "./App.style"
import { handleInitialData } from "../../actions/shared";
import Dashboard from "../dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import {QuestionPage} from "../question-page/QuestionPage";
import  Leaderboard from "../leaderboard/Leaderboard";
import { New } from "../new/New";
import { Divider } from "@fluentui/react-components";
import Nav from "../nav/Nav";

const mapStatesToProps = ({userReducer, authReducer}) => {
  const user = userReducer[authReducer]
  return {
    user,
    loading: authReducer === null
  }
}

const App = (props) => {

  useEffect(() => {
    props.dispatch(handleInitialData())
  }, [props])

  const styles = useStyles()
  return (
    <>
      <div className={styles.rootContainer}>
      {!props.loading && <div className={styles.navStyle}>
        <Nav user={props.user}/>
        <Divider appearance="subtle"/>
      </div> }
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" exact element={<Dashboard/>} />
          <Route path="/questions/:id" element={<QuestionPage/>}/>
          <Route path="/leaderboard" element={<Leaderboard/>}/>
          <Route path="/add" element={<New/>}/>
        </Routes>
      </div>
    </>
  );
}

export default connect(mapStatesToProps)(App);
