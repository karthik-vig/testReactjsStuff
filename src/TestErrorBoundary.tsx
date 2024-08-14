import { ErrorBoundary } from 'react-error-boundary'

function ErrorMsg({ error } : { error: Error}) {
    return (
        <div>
            <p>The error is: {error.message}</p>
        </div>
    );
}

function AppWithError({ action } : { action: boolean}) {
    if (action)
    throw new Error("Test Error");
    return (
        <p>No Error; functioning properly</p>
    );
}

export default function TestErrorBoundary() {
    return (
        <ErrorBoundary FallbackComponent={ErrorMsg}>
            <AppWithError action={true} />
        </ErrorBoundary>
    );
}