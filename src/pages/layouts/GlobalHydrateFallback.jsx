export default function GlobalHydrateFallback() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="flex flex-col items-center">
                <div className="w-20 h-20 border-8 border-emerald-500 border-t-transparent border-solid rounded-full animate-spin"></div>
                <p className="mt-6 text-xl font-semibold text-gray-700 tracking-wider">Loading...</p>
            </div>
        </div>
    );
}

