import { Link, useLocation } from "react-router-dom";

export default function PageNotFound() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
      <div className="w-full max-w-md text-center">
        <h1 className="text-7xl font-light text-slate-300">404</h1>
        <div className="mx-auto mt-2 h-0.5 w-16 bg-slate-200"></div>
        <h2 className="mt-6 text-2xl font-medium text-slate-800">Page Not Found</h2>
        <p className="mt-3 text-slate-600">
          The page <span className="font-medium text-slate-700">{location.pathname}</span> could not be found.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
