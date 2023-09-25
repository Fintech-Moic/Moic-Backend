import Navbar from '@/components/molecules/Navbar';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
