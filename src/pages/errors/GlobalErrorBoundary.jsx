import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

export default function GlobalErrorBoundary() {
    const error = useRouteError();

    let status = 500;
    let statusText = "Something went wrong";
    let message = "Sorry, an unexpected error has occurred.";

    if (isRouteErrorResponse(error)) {
        status = error.status;
        statusText = error.statusText || "Error";
        if (error.status === 404) {
            message = "Sorry, the page you are looking for does not exist.";
            statusText = "Not Found";
        } else if (error.data?.message) {
            message = error.data.message;
        }
    } else if (error instanceof Error) {
        message = error.message;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 font-sans">
            <div className="text-center p-10 bg-white rounded-2xl shadow-2xl max-w-md w-full">
                <h1 className="text-8xl font-bold text-indigo-600">{status}</h1>
                <p className="text-3xl font-semibold mt-4">{statusText}</p>
                <p className="mt-4 text-lg text-gray-600">{message}</p>
                <Link
                    to="/"
                    className="mt-8 inline-block bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                    Go to Homepage
                </Link>
            </div>
        </div>
    );
}

