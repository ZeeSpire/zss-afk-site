import Link from "next/link";

export default function NotFound() {
    return (
      <div>
        <h1>404</h1>
        <p>Pagina cautata nu a fost gasita</p>
        <Link  prefetch={false} href ="/ro">inapoi Acasa</Link>
      </div>
    );
  }