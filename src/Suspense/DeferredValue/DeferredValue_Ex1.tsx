import { Suspense, useDeferredValue, useState } from "react";

export function DeferredValueEx1() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  return (
    <>
      <h2>DeferredValue</h2>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />

      <Suspense fallback={<div>search result loading . . .</div>}>
        <div>deferred query : {deferredQuery}</div>
      </Suspense>
    </>
  );
}
