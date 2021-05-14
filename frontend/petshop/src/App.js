import './bootstrap.min.css';
//import './custom.css';
//import './bootstrap.min-2.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import {Container, Spinner} from 'react-bootstrap';
import {BrowserRouter as Router} from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import PagesRouter from './components/PagesRouter';
import { useEffect , useContext, useState} from 'react';
import { check } from './requests/userAPI';
import {Context} from './index';
import {observer} from 'mobx-react-lite';
import { Loading } from './components/Loading';

const App = observer(() => {
  const {user} = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() =>
    check().then(data => {
      user.setUser(true);
      user.setIsAuth(true);
    }).finally(() => setLoading(false)),1000)
  })

  if(loading) {
    return <Loading></Loading>
  }

  return (
    <Router>
      <Header></Header>
      <main className='py-5 px-3'>
        <Container fluid className="d-flex flex-column align-items-center">
          <PagesRouter />
        </Container>
      </main>
    </Router>
  );
})

export default App;
