import { Suspense_Ex1 } from "./Suspense/Suspense_Ex1";
import { DeferredValueEx1 } from "./Suspense/DeferredValue/DeferredValue_Ex1";
import { Spacing } from "./components/Spacing";
import { ErrorBoundary_Ex1 } from "./ErrorBoundary/ErrorBoundary_Ex1";

function App() {
  return (
    <>
      <Suspense_Ex1 />
      <Spacing value={50} />

      <DeferredValueEx1 />
      <Spacing value={50} />

      <ErrorBoundary_Ex1 />
    </>
  );
}

export default App;
