import { Component, type ReactNode } from "react";

type Props = {
    children: ReactNode;
};

type State = {
    hasError: boolean,
}

export class CustomerDetailsErrorBoundary extends Component<Props, State> {
    state: State = {
        hasError: false,
    };

    static getDerivedStateFromError(_error: Error): State {
        return { hasError: true };
    }

    handleTryAgain = () => {
        window.location.reload();
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <p>Something went wrong while loading customer details.</p>
                    <button onClick={this.handleTryAgain}>Try again</button>
                </div>
            );
        }
        return this.props.children;
    }
}