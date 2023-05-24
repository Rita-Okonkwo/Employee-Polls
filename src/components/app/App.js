import Login from "../login/Login";
import { useStyles } from "./App.style"

const App = () => {
  const styles = useStyles()
  return (
    <div className={styles.rootContainer}>
      <Login/>
    </div>
  );
}

export default App;
