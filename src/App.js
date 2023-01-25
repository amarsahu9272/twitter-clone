// import logo from './logo.svg';
import "./App.css";
// import DialogBox from './components/dialogbox/DialogBox';
import Feed from "./section/feed/Feed";
import Sidebar from "./section/sidebar/Sidebar";
import Widgets from "./section/widgets/Widgets";
import ProfilePage from "./section/profilePage/ProfilePage"

import { useRecoilValue } from "recoil";
import { isProfileClickedAtom } from "./recoil-states";
function App() {
  const isProfileData = useRecoilValue(isProfileClickedAtom);
  return (
    <div className="App">
      <>
        {isProfileData ? (
          <>
            <Sidebar />
            <Feed />
            {/* <ProfilePage/> */}
            <Widgets />
            {/* <DialogBox/> */}
          </>
        ) : (
          <>
            <Sidebar />
            {/* <Feed /> */}
            <ProfilePage />
            <Widgets />
            {/* <DialogBox/> */}
          </>
        )}
      </>
    </div>
  );
}

export default App;
