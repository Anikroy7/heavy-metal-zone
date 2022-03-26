import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './Components/Shop/Shop';
import QnA from './Components/QnA/QnA';

function App() {
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
      <QnA></QnA>
    </div>
  );
}

export default App;
