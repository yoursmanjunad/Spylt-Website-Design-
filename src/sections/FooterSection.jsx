import { useMediaQuery } from "react-responsive";

const FooterSection = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <section className="footer-section">
      <img
        src="/images/footer-dip.png"
        alt=""
        className="w-full object-cover -translate-y-1"
      />

      <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]">
        {/* Main Title and Message */}
        <div className="overflow-hidden z-10 text-center">
          <h1 className="general-title text-milk py-5">#CHUGRESPONSIBLY</h1>
          <p className="text-sm md:text-base text-milk font-paragraph font-medium mt-2">
            Stay bold. Stay chilled. Fuel the fun with SPYLT.
          </p>
        </div>

        {/* Background Video or Fallback Image */}
        {isMobile ? (
          <img
            src="/images/footer-drink.png"
            alt=""
            className="absolute top-0 object-contain"
          />
        ) : (
          <video
            src="/videos/splash.mp4"
            autoPlay
            playsInline
            muted
            className="absolute top-0 object-contain mix-blend-lighten"
          />
        )}

        {/* Sticky Footer Note */}
        <div className="absolute bottom-5 w-full text-center text-milk text-xs md:text-sm z-10 px-4">
          <p>© 2025 SPYLT. All Rights Reserved.</p>
          <p className="mt-1">Privacy Policy · Terms of Service</p>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
