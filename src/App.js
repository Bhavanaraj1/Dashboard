import './App.css'
import MainContent from './Components/MainContent/MainContent';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
    
      <Sidebar/>
      <Navbar/>
      <MainContent/>
  
    
    </div>
  );
}

export default App;
