import FadeOnScroll from "../components/FadeOnScroll";

export default function Brand() {
  const partnerLogo = [
    { name: "Dell", src: "./assets/brand/dell_logo.svg" },
    { name: "Zendesk", src: "./assets/brand/zendesk_logo.svg" },
    { name: "Rakuten", src: "./assets/brand/rakuten_logo.svg" },
    { name: "Pacific Funds", src: "./assets/brand/pacificfunds_logo.svg" },
    { name: "NCR", src: "./assets/brand/ncr_logo.svg" },
    { name: "Lattice", src: "./assets/brand/lattice_logo.svg" },
    { name: "TED", src: "./assets/brand/ted_logo.svg" },
  ];

  return (
    <div>
      <FadeOnScroll delay={0}>
        <p className="pt-36 text-center font-light text-white opacity-80 max-sm:mx-4">
          Trusted by teams at over 1,000 of the world’s leading organizations
        </p>
      </FadeOnScroll>
      <div className="mt-8 flex items-center justify-center gap-3 max-md:m-4 max-md:grid max-md:grid-cols-3 max-md:flex-col">
        {partnerLogo.map((logo, index) => (
          <FadeOnScroll key={index} delay={index * 0.1}>
            <div className="p-4">
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-full max-w-full transition-all hover:scale-110"
              />
            </div>
          </FadeOnScroll>
        ))}
      </div>
    </div>
  );
}
