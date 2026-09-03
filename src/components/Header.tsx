import logo from "../assets/icons/logo.svg";
import iconClose from "../assets/icons/icon-close.svg";
import { NAV_LINKS } from "../data/content";
import { Button } from "./Button";

type HeaderProps = {
  menuOpen: boolean;
  onToggleMenu: () => void;
};

export function Header({ menuOpen, onToggleMenu }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="page-wrap flex h-16 items-center justify-between xl:h-20">
        <a href="#home" className="relative block h-[21px] w-[154px] shrink-0">
          <img
            src={logo}
            alt="Digitalbank"
            width={154}
            height={21}
            className="absolute inset-0 size-full"
          />
        </a>

        <nav
          className="hidden h-full items-center xl:flex"
          aria-label="Primary"
        >
          <ul className="flex h-full items-stretch gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="flex">
                <a
                  href={link.href}
                  className="group relative flex items-center text-sm leading-[1.15] text-gray-blue transition-colors hover:text-navy"
                >
                  {link.label}
                  <span className="bg-cta-underline pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-center scale-x-0 transition-transform group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden xl:block">
          <Button>Request Invite</Button>
        </div>

        <button
          type="button"
          className="flex size-6 items-center justify-center xl:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={onToggleMenu}
        >
          {menuOpen ? (
            <img
              src={iconClose}
              alt=""
              width={18}
              height={18}
              className="size-[18px]"
            />
          ) : (
            <span className="flex h-[11px] w-6 flex-col justify-between" aria-hidden="true">
              <span className="h-px w-full bg-navy" />
              <span className="h-px w-full bg-navy" />
              <span className="h-px w-full bg-navy" />
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
