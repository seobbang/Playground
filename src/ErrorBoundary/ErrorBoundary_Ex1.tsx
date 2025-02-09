import { ErrorBoundary } from "./ErrorBoundary";

export function ErrorBoundary_Ex1() {
  return (
    <>
      <h2>Error Bounary</h2>

      <ErrorBoundary
        renderFallback={(error) => (
          <div>
            <p>에러가 발생했어요</p>
            <p>- 에러 메시지: {error.message}</p>
          </div>
        )}
      >
        <ErrorComponent />
      </ErrorBoundary>
    </>
  );
}

function ErrorComponent() {
  const error = true;

  if (error) {
    throw new Error("에러 발생 !!");
  }

  return <div>에러 컴포넌트</div>;
}
