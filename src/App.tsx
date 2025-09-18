import { ThemeProvider } from "./contexts/ThemeProvider";
import { MainLayout } from "./views/MainLayout";

function App() {
  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;
