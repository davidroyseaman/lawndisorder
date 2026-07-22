import { BrowserRouter } from "react-router-dom";
import Index from "~/site/index.js";

const App = () => {
  return (
    <BrowserRouter>
      <Index />
    </BrowserRouter>
  );
};

export default App;
