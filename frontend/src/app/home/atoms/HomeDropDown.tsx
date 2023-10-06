import { motion } from 'framer-motion';
import Link from 'next/link';
import { HomeDropDownProps } from '@/types/home';

const variants = {
  open: { opacity: 1, height: 'auto' },
  closed: { opacity: 0, height: 0 },
};

export default function HomeDropDown({
  isOpen,
  items,
  signOut,
}: HomeDropDownProps) {
  return (
    <motion.div
      className="absolute right-0 z-10"
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
      transition={{ duration: 0.2 }}
    >
      <ul className="w-24 h-40 flex flex-col justify-between captionb bg-white items-center border-Secondary border-2 border-solid rounded-md ">
        {items.map((item) => (
          <li key={item.name} className="h-10 flex items-center">
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
        <button
          type="button"
          onClick={signOut}
          className="border-t-2 border-solid w-full h-10 items-center"
        >
          로그아웃
        </button>
      </ul>
    </motion.div>
  );
}
