import AppSafe from "./components/AppSafe";
import { QuoteProvider } from "./context/QuoteProvider";

import "./App.css";

function App() {
  return (
    <QuoteProvider>
      <AppSafe />
    </QuoteProvider>
  );
}

export default App;
