import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";

export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="About Truecolors"
        title="Why Choose Truecolors?"
      >
        Truecolors is a powerful application that combines real-time color scanning 
        and the Ishihara test, specifically designed to help individuals with 
        color blindness. Whether you want to test your color perception or need 
        accurate color identification, Truecolors provides an all-in-one solution 
        that is easy to use and highly accurate.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="Watch a Video"
        title="Learn How Truecolors Works"
      >
        This section highlights a demo or tutorial video showcasing how to use 
        the features of Truecolors. From real-time color scanning to conducting 
        Ishihara tests, you’ll discover how Truecolors can make color analysis 
        more accessible and accurate for users with varying color perception.
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />

      <SectionTitle
        preTitle="Testimonials"
        title="What Do Our Users Say About Truecolors?"
      >
        Hear from users who have benefited from Truecolors to improve their 
        understanding of color perception and effectively manage tasks that 
        involve accurate color recognition. Truecolors is trusted by many for 
        its innovative approach to helping those with color blindness.
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Address your users’ common questions about Truecolors. From how to use 
        the app for color scanning to interpreting Ishihara test results, provide 
        detailed answers to ensure they get the most out of your app.
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
