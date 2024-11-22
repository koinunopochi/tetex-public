import { Loading } from './components/atoms/Loading';
import { BasePageLayout } from './components/layout/BasePageLayout';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <>
      <ThemeProvider>
        <BasePageLayout>
          <Loading />
        </BasePageLayout>
      </ThemeProvider>
    </>
  );
}

export default App;
