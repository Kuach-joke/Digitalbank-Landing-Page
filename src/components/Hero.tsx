import heroMobile from "../assets/images/hero-mobile.png";
import mockups from "../assets/images/image-mockups.png";
import bgIntroDesktop from "../assets/images/bg-intro-desktop.svg";
import { Button } from "./Button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-x-clip bg-white"
      aria-labelledby="hero-heading"
    >
      <div className="relative xl:min-h-[656px]">
        <div className="pointer-events-none relative -mt-16 h-[400px] overflow-hidden md:-mt-16 md:h-[520px] xl:absolute xl:inset-y-0 xl:right-0 xl:mt-0 xl:h-[778px] xl:w-[800px] xl:overflow-visible">
          <img
            src={bgIntroDesktop}
            alt=""
            className="absolute top-12 right-0 hidden h-[656px] w-[800px] max-w-none xl:block"
          />
          <img
            src={heroMobile}
            alt="Digitalbank app on overlapping phones"
            className="absolute inset-x-0 top-0 mx-auto h-[400px] w-auto max-w-none object-cover object-top md:h-[520px] xl:hidden"
          />
          <img
            src={mockups}
            alt="Digitalbank app on overlapping phones"
            className="absolute top-[-10%] right-0 hidden h-[778px] w-auto max-w-none xl:block"
          />
        </div>

        <div className="page-wrap relative z-10 flex flex-col items-center px-6 pb-20 pt-2 text-center md:pb-24 xl:items-start xl:px-0 xl:pb-[170px] xl:pt-[170px] xl:text-left">
          <div className="flex max-w-[447px] flex-col items-center gap-6 xl:items-start xl:gap-6">
            <h1
              id="hero-heading"
              className="text-[40px] font-light leading-[1.2] tracking-[-0.75px] text-navy md:text-[56px] md:tracking-[-1px]"
            >
              Next generation digital banking
            </h1>
            <p className="text-[15px] leading-[25px] tracking-[-0.23px] text-gray-blue md:text-lg md:leading-[1.55] md:tracking-[-0.25px]">
              Take your financial life online. Your Digitalbank account will be
              a one-stop-shop for spending, saving, budgeting, investing, and
              much more.
            </p>
            <Button>Request Invite</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
