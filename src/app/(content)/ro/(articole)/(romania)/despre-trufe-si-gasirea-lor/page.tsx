import Navbar from "@/app/components/ro/navbar/Navbar";

export default function Page() {
  return (
    <div>
      <Navbar enUrl="/about-truffles-and-how-to-find-them" />
      <main className="flex-grow">
        about
      </main>
    </div>
  );
}
