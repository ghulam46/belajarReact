import logo from './logo.svg';
import './Component/Functional/CSS/Blog.css';
import Header from './Component/Functional/Header';
import HeaderClass from './Component/Class/HeaderClass';
import Parent from './Component/Class/Parent';

function App() {
  return (
    <div className="App">
      <Header/>
      <Parent/>
    </div>
  );
}

export default App;
