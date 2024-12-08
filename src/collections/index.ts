import { ICollection } from "@/models/Collection";
import { grani } from "./grani";
import { alica } from "./alica";
import { olga } from "./olga";
import { gzhel } from "./gzhel";
import { classic } from "./classic";
import { mosty } from "./mosty";
import { pinap } from "./pinap";
import { newyear } from "./newyear";
import { flowers } from "./flowers";
import { iskusstvo } from "./iskusstvo";
import { tradicii } from "./tradicii";

export const collections: ICollection[] = [
  {
    image:
      "https://storage.yandexcloud.net/mikhail-milutin/preview/alicafon.jpg",
    title: "Алиса в стране чудес",
    cards: alica,
  },
  {
    image:
      "https://storage.yandexcloud.net/mikhail-milutin/preview/granifon.jpg",
    title: "Грани",
    cards: grani,
  },
  {
    image:
      "https://storage.yandexcloud.net/mikhail-milutin/preview/olgafon.jpg",
    title: "Ольга",
    cards: olga,
  },
  {
    image:
      "https://storage.yandexcloud.net/mikhail-milutin/preview/gzhelfon.jpg",
    title: "Коллекция в стиле Гжель",
    cards: gzhel,
  },
  {
    image:
      "https://storage.yandexcloud.net/mikhail-milutin/preview/classicfon.jpg",
    title: "Классика",
    cards: classic,
  },
  {
    image:
      "https://storage.yandexcloud.net/mikhail-milutin/preview/mostyfon.jpg",
    title: "Знаменитые мосты и решетки",
    cards: mosty,
  },
  {
    image:
      "https://storage.yandexcloud.net/mikhail-milutin/preview/pinapfon.jpg",
    title: "Пин-ап",
    cards: pinap,
  },
  {
    image:
      "https://storage.yandexcloud.net/mikhail-milutin/preview/newyearfon.jpg",
    title: "Новогоднее настроение",
    cards: newyear,
  },
  {
    image:
      "https://storage.yandexcloud.net/mikhail-milutin/preview/flowersfon.jpg",
    title: "Сад цветов",
    cards: flowers,
  },
  {
    image:
      "https://storage.yandexcloud.net/mikhail-milutin/preview/iskusstvofon.jpg",
    title: "Предметы искусства",
    cards: iskusstvo,
  },
  {
    image:
      "https://storage.yandexcloud.net/mikhail-milutin/preview/tradiciifon.jpg",
    title: "Сохраняя традиции",
    cards: tradicii,
  },
];
