import React from "react";
import { Carousel, Image } from "antd";
import { Link } from "react-router-dom";

const CarouselMain: React.FC = () => {
  return (
    <Carousel autoplay autoplaySpeed={3000}>
      <Link to="/Алиса в стране чудес">
        <Image
          preview={false}
          width={"100%"}
          loading="lazy"
          src="https://storage.yandexcloud.net/mikhail-milutin/slider/alicafon1full.jpg"
          alt=""
          placeholder={
            <Image
              preview={false}
              src="https://storage.yandexcloud.net/mikhail-milutin/slider/alicafon1.jpg"
              width={"100%"}
            />
          }
          className="w-full object-cover"
        />
      </Link>
      <Link to="/Алиса в стране чудес">
        <Image
          width={"100%"}
          placeholder={
            <Image
              preview={false}
              src="https://storage.yandexcloud.net/mikhail-milutin/slider/alicafon.jpg"
              width={"100%"}
            />
          }
          loading="lazy"
          preview={false}
          src="https://storage.yandexcloud.net/mikhail-milutin/slider/alicafonfull.jpg"
          alt=""
          className="w-full object-cover"
        />
      </Link>
      <Link to="/Алиса в стране чудес">
        <Image
          width={"100%"}
          placeholder={
            <Image
              preview={false}
              src="https://storage.yandexcloud.net/mikhail-milutin/slider/alicafon2.jpg"
              width={"100%"}
            />
          }
          loading="lazy"
          preview={false}
          src="https://storage.yandexcloud.net/mikhail-milutin/slider/alicafon2full.JPG"
          alt=""
          className="w-full object-cover"
        />
      </Link>
      <Link to="/Алиса в стране чудес">
        <Image
          width={"100%"}
          placeholder={
            <Image
              preview={false}
              src="https://storage.yandexcloud.net/mikhail-milutin/slider/alicafon3.jpg"
              width={"100%"}
            />
          }
          loading="lazy"
          preview={false}
          src="https://storage.yandexcloud.net/mikhail-milutin/slider/alicafon3full.JPG"
          alt=""
          className="w-full object-cover"
        />
      </Link>
      <Link to="/Алиса в стране чудес">
        <Image
          width={"100%"}
          preview={false}
          placeholder={
            <Image
              preview={false}
              src="https://storage.yandexcloud.net/mikhail-milutin/slider/alicafon4.JPG"
              width={"100%"}
            />
          }
          loading="lazy"
          src="https://storage.yandexcloud.net/mikhail-milutin/slider/alicafon4full.JPG"
          alt=""
          className="w-full object-cover"
        />
      </Link>
    </Carousel>
  );
};

export default CarouselMain;
