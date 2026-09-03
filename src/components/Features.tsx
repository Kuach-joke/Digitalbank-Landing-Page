import { FEATURES } from "../data/content";

export function Features() {
  return (
    <section
      id="about"
      className="bg-light-gray py-16 md:py-20 xl:py-24"
      aria-labelledby="features-heading"
    >
      <div className="page-wrap">
        <div className="mx-auto mb-12 max-w-[635px] text-center md:mb-16 xl:mx-0 xl:mb-[72px] xl:text-left">
          <h2
            id="features-heading"
            className="text-[32px] font-light leading-[1.2] tracking-[-0.5px] text-navy xl:text-[40px] xl:tracking-[-0.75px]"
          >
            Why choose Digitalbank?
          </h2>
          <p className="mt-4 text-sm leading-[1.15] text-gray-blue xl:mt-8 xl:text-lg xl:leading-[1.55] xl:tracking-[-0.25px]">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-8 md:gap-y-12 xl:grid-cols-4 xl:gap-8">
          {FEATURES.map((feature) => (
            <li
              key={feature.title}
              className="flex flex-col items-center gap-10 text-center xl:items-start xl:text-left"
            >
              <div className="relative size-[72px] overflow-clip">
                <img
                  src={feature.icon}
                  alt=""
                  width={72}
                  height={72}
                  className="size-full"
                />
              </div>
              <div className="flex flex-col gap-6">
                <h3 className="text-2xl font-light leading-[1.15] tracking-[-0.4px] text-navy">
                  {feature.title}
                </h3>
                <p className="text-sm leading-[1.15] text-gray-blue xl:text-base xl:leading-[26px] xl:tracking-[-0.25px]">
                  {feature.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
