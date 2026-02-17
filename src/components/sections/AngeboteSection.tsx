import SectionTitle from "../ui/SectionTitle";
import SectionText from "../ui/SectionText";

export default function AngeboteSection() {
  return (
    <section id="angebote" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Unsere Angebote</SectionTitle>  
        <SectionText>
          Von wöchentlichen Gruppenstunden bis zu mehrtägigen Lagern - bei der Jubla Triengen
          findest du das perfekte Angebot für dein Abenteuer.
        </SectionText>
      </div>
    </section>
  );
}
