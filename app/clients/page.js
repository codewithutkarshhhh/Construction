import PageHeader from "@/components/PageHeader";
import ClientLogos from "@/components/ClientLogos";
import CTABand from "@/components/CTABand";

export const metadata = {
  title: "Our Clients",
  description:
    "PKS Infratech has delivered for recognized names across telecom, energy, and infrastructure — including NIPL, BSNL, BBNL, Airtel, Jio, HFCL, NCC, GAIL, STL Tech, and Vmart.",
};

export default function ClientsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Clients"
        title="Trusted Partners"
        subtitle="We are proud to have delivered for some of the most recognized names across telecom, energy, and infrastructure."
      />

      <ClientLogos
        heading="Delivering For Industry Leaders"
        intro="A snapshot of the organizations that rely on PKS Infratech for advisory and execution."
        bg="bg-white"
      />

      <CTABand
        title="Become our next success story"
        body="Partner with a team that brings advisory rigor and on-ground execution to every project."
      />
    </>
  );
}
