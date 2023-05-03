import { Route , Routes , Link} from 'react-router-dom';
import CreatePlayerPage from './CreatePlayerPage';
import { Button } from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className='App'>

      <Link to='/CreatePlayer'> Yeni Takım Oyuncusu Ekle! </Link>
      
      <Routes>

        <Route path='/CreatePlayer' element={<CreatePlayerPage/>}/>
   
      </Routes>

    </div>
  );
};

export default App;
