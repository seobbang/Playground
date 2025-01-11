import "./App.css";
import { Suspense_Ex1 } from "./Suspense/Suspense_Ex1";
import { DeferredValueEx1 } from "./Suspense/DeferredValue/DeferredValue_Ex1";
import { Spacing } from "./components/Spacing";

function App() {
  return (
    <>
      <Suspense_Ex1 />
      <Spacing value={50} />
      <DeferredValueEx1 />
    </>
  );
}

export default App;
