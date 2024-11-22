import Footer from './components/molecules/Footer';
import Header from './components/molecules/Header';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Footer/>
      </ThemeProvider>
    </>
  );
}

export default App;
