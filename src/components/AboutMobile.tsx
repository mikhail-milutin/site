import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export default function AboutMobile() {
  return (
    <div className="940:hidden grid gap-6 items-center justify-items-center">
      <h1 className="md:hidden sm:text-4xl ssm:text-3xl text-center text-2xl sm:my-10 tracking-wide">
        Об авторе
      </h1>
      <img
        src="./mikhail.jpg"
        alt=""
        className="rounded-lg w-8/12 ssm:w-6/12 mx-auto"
      />
      <div>
        <div className="text-[#b0b0b0] text-center text-sm md:text-lg font-poiret tracking-wider">
          Художник, создатель драгоценностей. Произведения Михаила Милютина –
          синтез ювелирного мастерства и художественной фантазии.
        </div>
      </div>
      <Link to="/about" className="">
        <Button variant="link" className="mx-auto text-base text-white">
          Подробнее
          <ExternalLinkIcon className="ml-2" />
        </Button>
      </Link>
    </div>
  );
}
