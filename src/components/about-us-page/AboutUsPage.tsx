import HeroAboutUs from "../common/hero-about/HeroAboutUs";
import Products from "../common/products/Products";
import Newsletter from "../common/newsletter/Newsletter";
import StoryAboutHistory from "../common/story-about-us/StoryAboutHistory";
import StoryAboutPurpose from "../common/story-about-us/StoryAboutPurpose";
import ContactUs from "../common/contact-us/ContactUs";

const AboutUsPage = () => (
  <div>
    <HeroAboutUs />
    <StoryAboutHistory />
    <Products />
    <StoryAboutPurpose />
    <ContactUs />
    <Newsletter />
  </div>
);

export default AboutUsPage;
