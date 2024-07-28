import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Cultures = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="The Essence of Senisha"
        invert
      >
        <p>
          Collaboration, Innovation, and Client-Centric Excellence
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Client-Centric Approach" invert>
            We prioritize our clients, ensuring their needs and visions 
            guide every project and decision we make.
          </GridListItem>
          <GridListItem title="Collaborative Innovation" invert>
            Our team thrives on synergy, fostering creativity to deliver 
            unique digital business cards for every client.
          </GridListItem>
          <GridListItem title="Commitment to Excellence" invert>
            We meticulously craft each detail to ensure every Senisha 
            card showcases superior design and functionality.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Cultures;
