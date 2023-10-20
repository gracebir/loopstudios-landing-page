import Creations from "./_components/Creations";
import Hero from "./_components/Hero";
import Interactive from "./_components/Interactive";

export default function Home() {
  return (
    <main className="w-full">
     <Hero/>
     <div className="container mx-auto px-6 lg:px-0 py-6 lg:py-10">
      <Interactive/>
      <Creations/>
     </div>
    </main>
  )
}
