import { auth } from "@/auth";
import Nav from "./(components)/Nav/Nav";

export default async function Home() {
  return (
    <main className="flex min-h-screen justify-between p-16">
      <header className="w-full">
        <Nav />
      </header>
    </main>
  );
}
