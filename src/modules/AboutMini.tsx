import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import AboutMobile from "@/components/AboutMobile";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

export default function AboutMini() {
  return (
    <div className="container">
      <Separator className="dark lg:my-20 my-5" />
      <div className="940:grid hidden grid-cols-2 gap-8 items-center justify-items-center mx-auto w-10/12">
        <div className="flex justify-center">
          <Link to={"/about"}>
            <motion.img
              loading="lazy"
              whileHover={{ scale: 1.03 }}
              src="./mikhail.jpg"
              alt=""
              className="rounded-lg lg:w-full w-8/12"
            />
          </Link>
        </div>
        <div className="flex h-full flex-col justify-between">
          <h1 className="sm:text-4xl ssm:text-3xl text-center text-2xl mb-4">
            Об авторе
          </h1>
          <div className="flex flex-col gap-2 items-center text-center text-[#b0b0b0] text-lg lg:text-xl font-poiret tracking-wider">
            Художник, создатель драгоценностей. Произведения Михаила Милютина –
            синтез ювелирного мастерства и художественной фантазии.
            <Link to="/about" className="mx-auto">
              <Button variant="link" className="text-base text-white">
                Подробнее
                <ExternalLinkIcon className="ml-2" />
              </Button>
            </Link>
          </div>
          <div></div>
        </div>
      </div>
      <AboutMobile />
      <Separator className="dark lg:mt-20 mt-5" />
    </div>
  );
}
