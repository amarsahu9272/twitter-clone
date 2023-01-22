// import logo from './logo.svg';
import './App.css';
// import DialogBox from './components/dialogbox/DialogBox';
import Feed from './section/feed/Feed';
import Sidebar from './section/sidebar/Sidebar';
import Widgets from './section/widgets/Widgets';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Feed/>
      <Widgets/>
      {/* <DialogBox/> */}
    </div>
  );
}

export default App;
