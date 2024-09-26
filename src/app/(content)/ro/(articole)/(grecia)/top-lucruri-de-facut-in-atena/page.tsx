import Navbar from "@/app/components/ro/navbar/Navbar";

export default function Page() {
  return (
    <div>
      <Navbar enUrl="/top-things-to-do-in-athens" />
      <main className="flex-grow">
        about
      </main>
    </div>
  );
}
