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
                    className="block size-5 bg-white transition-colors hover:bg-lime"
                    style={{
                      maskImage: `url(${social.icon})`,
                      WebkitMaskImage: `url(${social.icon})`,
                      maskRepeat: "no-repeat",
                      WebkitMaskRepeat: "no-repeat",
                      maskPosition: "center",
                      WebkitMaskPosition: "center",
                      maskSize: "contain",
                      WebkitMaskSize: "contain",
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-col items-center gap-4 text-center text-sm leading-[1.15] text-white xl:grid xl:grid-cols-2 xl:items-start xl:gap-x-8 xl:gap-y-6 xl:text-left">
              {leftLinks.map((link) => (
                <li key={link.label} className="xl:col-start-1">
                  <a href={link.href} className="transition-colors hover:text-lime">
                    {link.label}
                  </a>
                </li>
              ))}
              {rightLinks.map((link) => (
                <li key={link.label} className="xl:col-start-2">
                  <a href={link.href} className="transition-colors hover:text-lime">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
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
