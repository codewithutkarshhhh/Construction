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
    <div className="page-clients">
      <PageHeader
        eyebrow="Our Clients"
        title="Trusted Partners"
        subtitle="We are proud to have delivered for some of the most recognized names across telecom, energy, and infrastructure."
        bgImage="https://d8j0ntlcm91z4.cloudfront.net/user_3DOQayCkzLWb1jKyvrHBg2t8TL6/hf_20260704_171428_76fa2694-9400-4188-9fe8-8216513dbb38.png"
      />

      <ClientLogos
        heading="Delivering For Industry Leaders"
        intro="A snapshot of the organizations that rely on PKS Infratech for advisory and execution."
        bg="bg-transparent"
      />

      <CTABand
        title="Become our next success story"
        body="Partner with a team that brings advisory rigor and on-ground execution to every project."
      />
    </div>
  );
}
