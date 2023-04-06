import './App.css';
import Content from './components/Content/index';
import Footer from './components/Footer';
import Header from './components/Header';
import { TodoProvider } from './contexts/TodoContext';


function App() {
  return (
    <TodoProvider>
      <section className="todoapp">
        <Header />
        <Content />
      </section>
      <Footer />
    </TodoProvider>
  );
}

export default App;
