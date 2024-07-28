import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Values from "@/components/Values";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32 min-h-full">
        <FadeIn className="max-w-3xl">
          <h5 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
            Revolutionizing Networking forTomorrow&#39;s Connections
          </h5>
          <p className="mt-6 text-xl text-neutral-600">
            Share your business details effortlessly, anytime, anywhere. 
            Enhance connectivity and engagement with instant access. 
            Showcase your business to clients and partners with ease. 
            Experience seamless networking today!
          </p>
        </FadeIn>
      </Container>
      {/* <Clients />
      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "Phobia", logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user microphone without triggering one of
        those annoying permission dialogs.
      </Testimonials> */}
      <Values />
      <ContactSection />
    </main>
  );
}
