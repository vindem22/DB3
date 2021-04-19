import './bootstrap.min.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import {Container} from 'react-bootstrap';
import {BrowserRouter as Router} from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import PagesRouter from './components/PagesRouter';

function App() {
  return (
    <Router>
      <Header></Header>
      <main className='py-3'>
        <Container>
          <PagesRouter />
        </Container>
      </main>
    </Router>
  );
}

export default App;
