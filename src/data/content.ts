import iconOnline from "../assets/icons/icon-online.svg";
import iconBudgeting from "../assets/icons/icon-budgeting.svg";
import iconOnboarding from "../assets/icons/icon-onboarding.svg";
import iconApi from "../assets/icons/icon-api.svg";
import iconFacebook from "../assets/icons/icon-facebook.svg";
import iconYoutube from "../assets/icons/icon-youtube.svg";
import iconTwitter from "../assets/icons/icon-twitter.svg";
import iconPinterest from "../assets/icons/icon-pinterest.svg";
import iconInstagram from "../assets/icons/icon-instagram.svg";
import articleCurrency from "../assets/images/article-currency.png";
import articleRestaurant from "../assets/images/article-restaurant.png";
import articlePlane from "../assets/images/article-plane.png";
import articleConfetti from "../assets/images/article-confetti.png";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Blog", href: "#blog" },
  { label: "Careers", href: "#careers" },
] as const;

export const FEATURES = [
  {
    title: "Online Banking",
    description:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    icon: iconOnline,
  },
  {
    title: "Simple Budgeting",
    description:
      "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
    icon: iconBudgeting,
  },
  {
    title: "Fast Onboarding",
    description:
      "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
    icon: iconOnboarding,
  },
  {
    title: "Open API",
    description:
      "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    icon: iconApi,
  },
] as const;

export const ARTICLES = [
  {
    author: "Claire Robinson",
    title: "Receive money in any currency with no fees",
    excerpt:
      "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
    image: articleCurrency,
    imageAlt: "Assorted international banknotes fanned on a table",
  },
  {
    author: "Wilson Hutton",
    title: "Treat yourself without worrying about money",
    excerpt:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
    image: articleRestaurant,
    imageAlt: "A plated restaurant dish with wine glasses in the background",
  },
  {
    author: "Wilson Hutton",
    title: "Take your Digitalbank card wherever you go",
    excerpt:
      "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even ...",
    image: articlePlane,
    imageAlt: "Airplane wing above clouds at sunset",
  },
  {
    author: "Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    excerpt:
      "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through ...",
    image: articleConfetti,
    imageAlt: "Colorful confetti against a teal background",
  },
] as const;

export const FOOTER_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Blog", href: "#blog" },
  { label: "Careers", href: "#careers" },
  { label: "Support", href: "#support" },
  { label: "Privacy Policy", href: "#privacy" },
] as const;

export const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://facebook.com", icon: iconFacebook },
  { label: "YouTube", href: "https://youtube.com", icon: iconYoutube },
  { label: "Twitter", href: "https://twitter.com", icon: iconTwitter },
  { label: "Pinterest", href: "https://pinterest.com", icon: iconPinterest },
  { label: "Instagram", href: "https://instagram.com", icon: iconInstagram },
] as const;
