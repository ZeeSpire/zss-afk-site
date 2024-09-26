import Navbar from "@/app/components/ro/navbar/Navbar";

export default function Page() {
  return (
    <div>
      <Navbar enUrl="/everything-about-matera-italy" />
      <main className="flex-grow">
        about
      </main>
    </div>
  );
}
