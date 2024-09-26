import Link from "next/link";

export default function NotFound() {
    return (
      <div>
        <h1>Not found</h1>
        <p>Sorry, the page you sre looking does not exist</p>
        <Link href ="/">Return Home</Link>
      </div>
    );
  }