import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center px-6 py-16">
      <Image
        src="/banner_img.svg"
        width={600}
        height={600}
        alt="Fresh food weighed against fast food, one side approved and the other rejected"
        priority
        className="h-auto w-full max-w-[30rem] [filter:grayscale(1)_invert(1)]"
      />

      <div className="flex flex-col items-center text-center">
        <h1 className="text-[clamp(3.5rem,12vw,8rem)] leading-[0.85] font-extrabold tracking-tighter">
          FaceOff
        </h1>
        <p className="mt-5 max-w-sm text-[clamp(1rem,2vw,1.25rem)] leading-snug text-balance text-muted-foreground">
          Discover the better choice, together.
        </p>
        <Link href="/login" className="mt-9">
          <Button className="h-11 px-7 text-base">Start free</Button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
