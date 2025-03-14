import Link from "next/link";
import { AppleCardsCarouselDemo } from "../general/AppleCardCarousel";
import SplitText from "../reactbits/TextAnimations/SplitText/SplitText";
import ButtonHero from "../general/ButtonHero";

const Hero = () => {
  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 c-space gap-3">
        <div className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          <SplitText
            text="Hi, i'm Ridho Hery Winarto"
            className="text-4xl font-semibold text-center"
            delay={150}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            threshold={0.2}
            rootMargin="-50px"
          />
        </div>
        <p className="hero_tag text-gray_gradient">
          Building Products & Brands
        </p>
      </div>
      <AppleCardsCarouselDemo />
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <Link href={"#about"} className="w-full">
          {/**
           * nantinya bisa diubah dan disesuaikan, karena kurang aja rasaku
           */}
          <ButtonHero
            name="Lets Work Together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
