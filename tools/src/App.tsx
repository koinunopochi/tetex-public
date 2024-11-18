import { Suspense } from 'react';
import './App.css';
import { Routes } from 'react-router-dom';
import { createRoutes } from './routes';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/molecules/Header';
import BasePageLayout from './layout/basePageLayout/BasePageLayout';
import ContentPageLayout from './layout/contentPageLayout/ContentPageLayout';

const LoadingSpinner = () => <div>Loading...</div>;

function App() {
  const { toolRoutes } = createRoutes();
  return (
    <>
      <ThemeProvider>
        <BasePageLayout>
          <Header />
          <ContentPageLayout>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>{toolRoutes}</Routes>
            </Suspense>
          </ContentPageLayout>
        </BasePageLayout>
      </ThemeProvider>
    </>
  );
}

export default App;
