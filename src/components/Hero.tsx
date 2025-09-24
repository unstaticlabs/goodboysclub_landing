import { Link } from "react-router";
import image from "../assets/hero.png";

export const Hero = () => {
  return (
    <section className="container grid place-items-center py-24 md:py-20 gap-10 h-[100vh]">
      <div className="text-center flex flex-col items-center space-y-24 h-full justify-between">
        <main className="text-5xl md:text-6xl font-bold">
          <img src={image} alt="Hero" className="w-1/2 mx-auto" />
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto text-balance">
          Daily&nbsp;cagechecks. 31&nbsp;days&nbsp;locked.
          Rewards&nbsp;if&nbsp;you&nbsp;last. Just&nbsp;$1/day.
          Sign&nbsp;up&nbsp;now.
        </p>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto text-balance">
          <Link to="/#join-the-challenge">
            ⬇️ Sign up for the Locktober Challenge before October 14th ⬇️
          </Link>
        </p>
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
