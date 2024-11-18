import { Suspense } from 'react';
import './App.css';
import { Routes } from 'react-router-dom';
import { createRoutes } from './routes';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/molecules/Header';
import BasePageLayout from './layout/basePageLayout/BasePageLayout';

const LoadingSpinner = () => <div>Loading...</div>;

function App() {
  const { toolRoutes } = createRoutes();
  return (
    <>
      <ThemeProvider>
        <BasePageLayout>
          <Header />
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>{toolRoutes}</Routes>
          </Suspense>
        </BasePageLayout>
      </ThemeProvider>
    </>
  );
}

export default App;
