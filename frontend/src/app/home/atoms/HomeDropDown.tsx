import { motion } from 'framer-motion';
import Link from 'next/link';
import { HomeDropDownProps } from '@/types/home';

const variants = {
  open: { opacity: 1, height: 'auto' },
  closed: { opacity: 0, height: 0 },
};

export default function HomeDropDown({ isOpen, items }: HomeDropDownProps) {
  return (
    <motion.div
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
      transition={{ duration: 0.2 }}
    >
      <ul className="flex flex-col bg-white border border-Secondary rounded-md">
        {items.map((item) => (
          <li key={item.name} className="">
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
