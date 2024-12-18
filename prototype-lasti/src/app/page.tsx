import Link from "next/link";

export default function Home() {

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-neutral">
      <Link className="btn btn-primary" href="/reservation">Make a reservation</Link>
    </div>
  );
}
