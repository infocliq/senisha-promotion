import React from "react";
import GridPattern from "./GridPattern";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Values = () => {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>
      <SectionIntro
        eyebrow="Our Story"
        title="The philosophy behind Senisha cards."
      >
        <p>
          Senisha merges traditional business cards with digital innovation, 
          providing a seamless and classic experience. During the pandemic, 
          we saw the need for safe, modern information exchange, 
          leading to our reinvention of networking.
        </p>
      </SectionIntro>
      <Container className="mt-24">
        <GridList>
          <GridListItem title="For all smartphones">
            Senisha merges classic business cards with digital 
            tech, offering a seamless networking experience for iOS and Android users.
          </GridListItem>
          <GridListItem title="Custom design">
            Senisha offers custom designs with personalized logos 
            and colors, blending traditional business cards with digital 
            innovation for a unique, branded experience.
          </GridListItem>
          <GridListItem title="Contactless">
            We offer contactless NFC and QR code functionality, blending traditional business 
            cards with modern digital technology for seamless networking.
          </GridListItem>
          <GridListItem title="No app">
            Works effortlessly without requiring an app, providing contactless 
            NFC and QR code functionality for a seamless, modern networking experience.
          </GridListItem>
          <GridListItem title="Personalized">
            We offer personalized NFC and QR code functionality, blending traditional business 
            cards with modern digital technology for seamless networking.
          </GridListItem>
          <GridListItem title="Brand promotion">
            Enabling effortless contact exchange and brand promotion through the use of modern and 
            advanced digital technology solutions.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Values;
