// Suspense가 가능한 경우
import { lazy, Suspense, useEffect, useState } from "react";

export function Suspense_Ex1() {
  return (
    <>
      <h2>Suspense</h2>
      <Suspense fallback={<div>promise comp loading . . .</div>}>
        <PromiseComp />
      </Suspense>

      <Suspense fallback={<div>lazy comp loading . . .</div>}>
        <LazyComp />
      </Suspense>

      <Suspense fallback={<div>effect comp loading . . .</div>}>
        <EffectComp />
      </Suspense>
    </>
  );
}

// 기본 개념
// chidren component에서 promise를 throw해야함.
// Suspense는 throw된 promise가 pending 상태일 때 fallback UI를 보여주고
// 그 promise가 resolve되면, 리렌더링함.
const resource = fetchData();

function PromiseComp() {
  const data = resource.read();

  return data;
}

function fetchData() {
  let result: string;

  const promise = new Promise((resolve) => {
    setTimeout(() => resolve("Data loaded!"), 2000);
  }).then((res) => {
    if (typeof res === "string") result = res;
  });

  return {
    read: () => {
      if (result !== undefined) {
        return result;
      }
      throw promise;
    },
  };
}

// 🟢: lazy comp
const LazyComp = lazy(() => delay(import("./LazyComp.tsx")));

function delay<T>(promise: Promise<T>): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

// 🟢: use

// ❌: useEffect
function EffectComp() {
  const [res, setRes] = useState("");

  useEffect(() => {
    async function fetch() {
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          setRes("result");
          resolve();
        }, 2000);
      });
    }

    fetch();
  }, []);

  return <>{res}</>;
}
