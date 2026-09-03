import { ARTICLES } from "../data/content";

export function Articles() {
  return (
    <section
      id="blog"
      className="bg-off-white py-16 md:py-20 xl:py-[88px]"
      aria-labelledby="articles-heading"
    >
      <div className="page-wrap">
        <h2
          id="articles-heading"
          className="mb-[32px] text-center text-[32px] font-light leading-[1.2] tracking-[-0.5px] text-navy md:mb-10 xl:mb-14 xl:text-left xl:text-[40px] xl:tracking-[-0.75px]"
        >
          Latest Articles
        </h2>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-4">
          {ARTICLES.map((article) => (
            <li key={article.title}>
              <article className="flex h-full flex-col overflow-hidden rounded-[5px] bg-white">
                <div className="h-[200px] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    width={255}
                    height={200}
                    className="size-full object-cover"
                    sizes="(min-width: 1280px) 255px, (min-width: 768px) 45vw, 92vw"
                  />
                </div>
                <div className="flex flex-1 flex-col px-[30px] py-6 xl:px-[19px]">
                  <p className="text-[10px] leading-[1.15] text-gray-blue">
                    By {article.author}
                  </p>
                  <h3 className="mt-2">
                    <a
                      href="#blog"
                      className="text-base font-light leading-[1.2] tracking-[-0.25px] text-navy transition-colors hover:text-lime"
                    >
                      {article.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-[1.15] text-gray-blue">
                    {article.excerpt}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
