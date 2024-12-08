import { Separator } from "@/components/ui/separator";
import { Image } from "antd";

interface Achievments {
  src: string;
  title: string;
}

export default function Achievments() {
  return (
    <div>
      <div className="lg:flex grid md:grid-cols-3 sm:mt-0 mt-8 sm:grid-cols-2 gap-12 items-center justify-center justify-items-center leading-6 tracking-wider mb-10">
        <Image.PreviewGroup>
          <div className="grid gap-4 text-center text-white">
            <Image
              loading="lazy"
              fallback="./fallback.png"
              src="./achievments/1.jpeg"
              alt=""
            />
            <Separator />
            <div className="xl:text-lg text-sm ">
              В 2022 году стал призером выставки «Гохран России», в номинации
              «Использование нетрадиционных материалов в авторских работах»
            </div>
          </div>
          <div className="grid gap-4 text-center text-white">
            <Image
              loading="lazy"
              fallback="./fallback.png"
              src="./achievments/2.jpg"
              alt=""
            />
            <Separator />
            <div className="xl:text-lg text-sm">
              В 2021 году стал призером ювелирной выставки J – 1, в номинации
              «Лучшее ювелирное искусство»
            </div>
          </div>
          <div className="grid gap-4 text-center text-white">
            <Image
              loading="lazy"
              fallback="./fallback.png"
              src="./achievments/4.jpg"
              alt=""
            />
            <Separator />
            <div className="xl:text-lg text-sm">
              В 2019 году стал призером выставки «Гохран России», в номинации
              «Ювелирные техники: традиции и мастерство»
            </div>
          </div>
          <div className="grid gap-4 text-center text-white">
            <Image
              loading="lazy"
              fallback="./fallback.png"
              src="./achievments/3.jpg"
              alt=""
            />
            <Separator />
            <div className="xl:text-lg text-sm">
              С 2020 года состоит в «Международной Академии творчества
            </div>
          </div>
        </Image.PreviewGroup>
      </div>
    </div>
  );
}
