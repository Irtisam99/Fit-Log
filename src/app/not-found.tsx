import Link from "next/link";

const NotFound = () => {
    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
            <h1 className="text-7xl font-extrabold text-[#B9FF00]">
                404
            </h1>

            <h2 className="mt-4 text-2xl font-bold text-white">
                PAGE NOT FOUND
            </h2>

            <p className="mt-2 text-[#8A92A0]">
                The page you're looking for doesn't exist.
            </p>

            <Link
                href="/"
                className="mt-6 rounded-full bg-[#B9FF00] px-6 py-3 text-sm font-semibold text-black"
            >
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;