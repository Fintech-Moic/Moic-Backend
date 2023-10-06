import Navbar from '@/components/molecules/Navbar';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div>{children}</div>
      <div className="flex justify-center">
        <Navbar />
      </div>
    </div>
  );
}
