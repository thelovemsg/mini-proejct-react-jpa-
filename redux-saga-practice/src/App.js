import { useSelector } from "react-redux";
import LoginForm from "./Login/LoginForm";
import Profile from "./Login/Profile";
function App() {
  const { loginDone } = useSelector((state) => state.user);
  return <>{loginDone ? <Profile /> : <LoginForm />}</>;
}

export default App;
