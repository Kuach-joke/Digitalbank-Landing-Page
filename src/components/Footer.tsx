import logoWhite from "../assets/icons/logo-white.svg";
import { FOOTER_LINKS, SOCIAL_LINKS } from "../data/content";
import { Button } from "./Button";

export function Footer() {
  const leftLinks = FOOTER_LINKS.slice(0, 3);
  const rightLinks = FOOTER_LINKS.slice(3);

  return (
    <footer
      id="contact"
      className="bg-navy py-14 xl:py-[48px]"
    >
      <div className="page-wrap flex flex-col items-center gap-8 xl:flex-row xl:items-start xl:justify-between">
        <div className="flex w-full flex-col items-center gap-8 xl:w-auto xl:flex-row xl:items-start xl:gap-[120px]">
          <div className="flex flex-col items-center gap-8 xl:items-start xl:gap-14">
            <a href="#home" className="relative block h-[21px] w-[153px]">
              <img
                src={logoWhite}
                alt="Digitalbank"
                width={153}
                height={21}
                className="absolute inset-0 size-full"
              />
            </a>
            <ul className="flex items-center gap-4">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex size-5 items-center justify-center"
                  >
                    <img
                      src={social.icon}
                      alt=""
                      width={20}
                      height={20}
                      className="size-5 object-contain transition-[filter] hover:[filter:brightness(0)_saturate(100%)_invert(67%)_sepia(58%)_saturate(464%)_hue-rotate(86deg)_brightness(94%)_contrast(90%)]"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-col items-center gap-4 text-center text-sm leading-[1.15] text-white xl:hidden">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-lime">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="hidden xl:flex xl:gap-8">
              <ul className="flex w-40 flex-col gap-6 text-sm leading-[1.15] text-white">
                {leftLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="transition-colors hover:text-lime">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="flex w-40 flex-col gap-6 text-sm leading-[1.15] text-white">
                {rightLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="transition-colors hover:text-lime">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="flex flex-col items-center gap-6 xl:items-end">
          <Button>Request Invite</Button>
          <p className="text-sm leading-[1.15] text-white/50">
            © Digitalbank. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
