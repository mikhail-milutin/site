import { ICollection } from "@/models/Collection";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Line from "@/assets/Line";

interface Props {
  collection: ICollection;
}

export default function Collection({ collection }: Props) {
  return (
    <Link to={collection.title} className="flex flex-col items-center gap-6">
      <motion.img
        loading="lazy"
        whileHover={{ scale: 1.03 }}
        src={collection.image}
        alt=""
        className="aspect-square object-cover"
      />
      <Line className="md:block hidden w-full fill-[#8D8D8E] stroke-[#8D8D8E]" />
      <div className="text-xl text-white">{collection.title}</div>
      <Line className="md:hidden block w-full fill-[#8D8D8E] stroke-[#8D8D8E]" />
    </Link>
  );
}
