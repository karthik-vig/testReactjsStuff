import { Suspense, } from "react";

function LoadingIndicator() {
    return (
        <div>
            <p>Loading...</p>
        </div>
    );
}

function SlowLoadingComp() {

    return (
        <div>
            <p>This Component finally loaded!!!</p>
        </div>
    );
}


export default function TestSuspense() {
    return (
        <div>
            <Suspense fallback={<LoadingIndicator />}>
                <SlowLoadingComp />
            </Suspense>
        </div>
    );
}