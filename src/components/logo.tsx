import { Link } from "react-router";

export default function Logo() {
  return (
    <Link
      to="/"
      className="logo-skoyo-academy select-none text-xl font-extrabold text-chart-1 flex flex-col justify-center items-center uppercase"
    >
      <span>Skoyo</span>
      <span className="-mt-2">Academy</span>
    </Link>
  );
}
