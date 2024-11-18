import { Suspense } from 'react';
import './App.css';
import { Routes } from 'react-router-dom';
import { createRoutes } from './routes';

const LoadingSpinner = () => <div>Loading...</div>;

function App() {
  const { toolRoutes } = createRoutes();
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>{toolRoutes}</Routes>
      </Suspense>
    </>
  );
}

export default App;
