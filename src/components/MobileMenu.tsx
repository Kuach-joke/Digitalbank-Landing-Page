import { useEffect } from "react";
import { NAV_LINKS } from "../data/content";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.classList.add("menu-open");
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("menu-open");
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      id="mobile-menu"
      className="fixed inset-x-0 top-16 z-40 xl:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <button
        type="button"
        className="absolute inset-0 h-[100dvh] cursor-default bg-linear-to-b from-navy/70 to-navy/0"
        aria-label="Close menu overlay"
        onClick={onClose}
      />
      <nav
        className="page-wrap relative pt-6"
        aria-label="Mobile"
      >
        <ul className="flex flex-col items-center gap-4 rounded bg-white px-6 py-8 shadow-[0_18px_40px_rgba(45,49,77,0.16)]">
          {NAV_LINKS.map((link) => (
            <li key={link.label} className="w-full text-center">
              <a
                href={link.href}
                className="block text-lg leading-[1.55] tracking-[-0.25px] text-navy"
                onClick={onClose}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
