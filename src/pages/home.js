import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { isUserLoggedInAtom} from "../recoil-states";
import { useNavigate } from "react-router-dom";
import App from "../App";

export default function HomePage() {
  const isUserLoggedIn = useRecoilValue(isUserLoggedInAtom);
  const nevigate = useNavigate();

  useEffect(() => {
    if (!isUserLoggedIn) {
      nevigate("/signin");
    }
  }, [isUserLoggedIn, nevigate]);
  return (
    <>
      {/* <h1>Welcome to the home page !!</h1> */}
      {/* <App/> */}
      {isUserLoggedIn && <App />}
    </>
  );
}
