import Link from "next/link";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-1 items-center justify-center px-4 py-10">
      <div className="w-full max-w-sm">
        <Link href="/" className="mb-6 block text-center">
          <span className="text-3xl font-extrabold tracking-tighter">
            FaceOff
          </span>
        </Link>
        {children}
      </div>
    </main>
  );
};

export default AuthLayout;
