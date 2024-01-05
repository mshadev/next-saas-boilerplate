import { auth } from "@/auth";
import Nav from "./(components)/Nav/Nav";
import { Check } from "lucide-react";

export default async function Home() {
  return (
    <main className="flex flex-col  min-h-screen container mx-auto p-12">
      <header className="px-12 gap-16">
        <Nav />
      </header>

      <section className="px-12 py-20">
        <div className="max-w-7xl flex flex-col lg:flex-row items-startgap-16">
          <div className="flex flex-col gap-10 lg:gap-14 lg:items-start">
            <h1 className="font-medium text-7xl md:text-4xl lg:text-6xl md:-mb-4 flex flex-col">
              100% FREE MVP NextJS Starter
            </h1>

            <div>
              <p className="text-lg text-base-content-secondary leading-relaxed">
                Easy start your need product with Auth & Email & Checkout
              </p>

              <ul className="hidden md:block text-base-content-secondary leading-relaxed space-y-1 mt-4">
                <li className="flex lg:justify-start gap-2">
                  <Check />
                  MongoDB & SupaBase
                </li>

                <li className="flex lg:justify-start gap-2">
                  <Check />
                  Authorization: OAuth, Email, Magic Link
                </li>

                <li className="flex items-center justify-center lg:justify-start gap-2">
                  <Check />
                  Easy start
                </li>
              </ul>
            </div>

            <button className="btn btn-success !text-base btn-wide">
              Go to github
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
