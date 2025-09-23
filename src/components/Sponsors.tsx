import QRCode from "react-qr-code";
import { Button } from "./ui/button";

export const Sponsors = () => {
  return (
    <section id="sponsors" className="container pt-24 sm:py-24">
      <div className="flex flex-col justify-center items-center">
        <a href="https://t.me/goodboysobey_bot?start" target="_blank">
          <div style={{ background: "white", padding: "16px" }}>
            <QRCode value="https://t.me/goodboysobey_bot?start" />
          </div>
        </a>
        <Button
          onClick={() =>
            window.open("https://t.me/goodboysobey_bot?start", "_blank")
          }
          className="w-full md:w-1/3 mt-4 text-white"
        >
          Join the Challenge
        </Button>
      </div>
    </section>
  );
};
