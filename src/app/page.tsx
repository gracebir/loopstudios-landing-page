import Creations from "./_components/Creations";
import Hero from "./_components/Hero";
import Interactive from "./_components/Interactive";

export default function Home() {
  return (
    <main className="w-full">
     <Hero/>
     <div className="wrapper-container lg:py-36 py-20">
      <Interactive/>
      <Creations/>
     </div>
    </main>
  )
}
