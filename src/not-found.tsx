import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <h1 className="mb-6 mt-6 text-center text-4xl font-bold uppercase md:text-6xl">
        Error 404 Not found
      </h1>
      <Link
        to="/"
        className="mx-auto block w-fit rounded bg-black px-6 py-2 text-white"
      >
        Go home
      </Link>
    </div>
  );
};
