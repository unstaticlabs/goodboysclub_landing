import image from "../assets/hero.png";

export const Hero = () => {
  return (
    <section className="container grid place-items-center py-32 md:py-24 gap-10">
      <div className="text-center flex flex-col items-center space-y-12">
        <main className="text-5xl md:text-6xl font-bold">
          <img src={image} alt="Hero" className="w-1/2 mx-auto" />
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto text-balance">
          ⬇️ Sign up for the Locktober Challenge ⬇️
        </p>
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
