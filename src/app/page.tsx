import Products from "./components/Products";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
      <section className="break-inside-avoid-page border-spacing-y-8">
        <div>
          <Hero/>
        </div>
        <div className="my-16">
          <Products/>
        </div>
      </section>
    </main>
  );
}
