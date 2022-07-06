import { FunctionComponent } from 'react';
import "./LoadingBar.css";

const LoadingBar: FunctionComponent<{ isLoading: boolean }> = function ({ isLoading }) {

    const base = "shimmer-animation absolute top-0 h-2";
    const loadingClass = base + (isLoading ? " bg-orange-600" : " hidden");

    return (
        <div className="relative w-full h-2 bg-gray-200 bg-transparent">
            <div className={loadingClass} style={{ width: '100%' }}></div>
        </div>
    );
};

export default LoadingBar;
