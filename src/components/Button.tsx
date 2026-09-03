type ButtonProps = {
  children: string;
  href?: string;
  className?: string;
};

export function Button({
  children,
  href = "#request-invite",
  className = "",
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`bg-cta inline-flex h-11 shrink-0 items-center justify-center rounded-[22px] px-8 text-sm font-bold leading-8 text-white transition-opacity hover:opacity-60 ${className}`}
    >
      {children}
    </a>
  );
}
