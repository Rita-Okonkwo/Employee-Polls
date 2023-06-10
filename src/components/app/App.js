import Login from "../login/Login";
import { connect } from "react-redux";
import { useEffect } from "react";
import { useStyles } from "./App.style"
import { handleInitialData } from "../../actions/shared";
import Dashboard from "../dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";

const mapStatesToProps = ({authReducer}) => {
  return {
    loading: authReducer === null
  }
}

const App = (props) => {

  useEffect(() => {
    props.dispatch(handleInitialData())
  }, [])

  const styles = useStyles()
  return (
    <>
      <div className={styles.rootContainer}>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" exact element={<Dashboard/>} />
        </Routes>
      </div>
    </>
  );
}

export default connect(mapStatesToProps)(App);
