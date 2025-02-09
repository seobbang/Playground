import React, { type PropsWithChildren, type ErrorInfo, type ReactNode } from "react";

type RenderFallback = (error: Error) => ReactNode;

interface Props {
  renderFallback: RenderFallback;
}

interface State {
  error: Error | null;
}

export class ErrorBoundary extends React.Component<PropsWithChildren<Props>, State> {
  state = { error: null };

  // React는 이 메서드를 "렌더링 과정에서 발생한 에러"를 감지했을 때 자동으로 호출
  // 이 메서드는 모든 Component가 가지고 있는 것이 아니기 때문에, 이 메서드를 가지고 있는 클래스 컴포넌트에서만 에러를 트리거하는 것
  // 그 중에서도 가장 가까운 에러 경계의 메서드를 실행시킴!

  // static
  // - this 사용 불가 -> this.setState 호출 대신 그냥 return 하는 것
  static getDerivedStateFromError(error: Error) {
    console.log("getDrivedStateFromError");
    // 다음 렌더링에서 폴백 ui가 보이도록 상태 업데이트
    return { error };
  }

  // 렌더링 이후에 실제로 에러가 발생했을 때 실행됨
  // this 사용 가능
  // setState 사용 가능. 그치만 권장되지 않음 => 불필요한 추가 렌더링이 발생될 수 있기 때문
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log("componentDidCatch");

    // 이렇게 로그도 남길 수 있음!
    console.log("log:", error, errorInfo);
  }

  render() {
    console.log("render");

    const { renderFallback, children } = this.props;
    const { error } = this.state;

    if (error != null) {
      console.log("renderFallback");

      return renderFallback(error);
    }

    console.log("children");

    return children;
  }
}
