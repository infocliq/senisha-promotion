import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="About us" title="The philosophy behind Senisha cards">
        <p>
          At Senisha, we believe our strength lies in our collaborative approach, 
          making our clients the focal point of everything we create.
        </p>
        <div className="mt-10 max-w-3xl space-y-6 text-base">
          <p>
            Everything is connected in this world we live in. You wear a watch that 
            connects to your home and computer. It is the digital age where technology 
            plays a huge role in our daily lives. However, people still use paper business 
            cards to exchange information. However, during the corona pandemic, 
            these cards will become obsolete. We saw an opportunity for Senisha to combine the 
            traditional way of exchanging business cards with innovation without sacrificing the 
            classic experience.
          </p>
          <p>
            Harnessing the power of technology, Senisha is reinventing the traditional way of networking 
            and making paper business cards obsolete. We combine software with NFC technology to create 
            easy-to-use digital business cards that allow people to share contact details and social media 
            links instantly, online and in person.
          </p>
        </div>
      </PageIntro>
      {/* <Container className="mt-16">
        <StatList>
          <StatListItem value="35" label="Underpaid employees" />
          <StatListItem value="52" label="Placated clients" />
          <StatListItem value="$25M" label="Invoices billed" />
        </StatList>
      </Container> */}
      <Cultures />
      {/* <ContactSection /> */}
    </>
  );
};

export default AboutPage;
