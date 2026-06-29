import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

const featuredWorks = [
  {
    title: "Happy Dog Playing with a Stick",
    category: "Documentary",
    videoUrl:
      "https://player.vimeo.com/video/1203280917?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
  },
  {
    title: "Birds in the Rain",
    category: "Nature Documentary",
    videoUrl:
      "https://player.vimeo.com/video/1203629520?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479%2Fembed",
  },
  {
    title: "Pure Hydration",
    category: "Commercial",
    videoUrl:
      "https://player.vimeo.com/video/1203630718?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
  },
  {
    title: "The End of Us",
    category: "Short Film",
    videoUrl:
      "https://player.vimeo.com/video/1203347568?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
  },
];

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative h-screen overflow-hidden">
        <video
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex h-full flex-col justify-between">
          <Navbar />

          <div className="px-10 pb-20 md:px-16">
            <p className="mb-5 text-sm font-light tracking-[0.35em] text-[#d8b46a]">
              Photographer / Video Director
            </p>

            <h1 className="max-w-5xl text-6xl font-light uppercase leading-none tracking-[0.12em] md:text-7xl">
              Liam Parker
            </h1>

            <a
              href="#my-work"
              className="mt-8 flex h-10 w-10 items-center justify-center rounded-full border border-[#d8b46a] text-[#d8b46a] transition hover:bg-[#d8b46a] hover:text-black"
            >
              ↓
            </a>
          </div>
        </div>
      </section>

      {/* MY WORK */}
      <section id="my-work" className="overflow-hidden px-10 pb-28 pt-40 md:px-16 md:pt-52">
        <div className="mb-12 flex items-end justify-between gap-8">
          <div>
            <p className="mb-4 text-sm tracking-[0.35em] text-[#d8b46a] uppercase">
              Selected Work
            </p>

            <h2 className="text-4xl font-light uppercase tracking-[0.22em]">
              My Work
            </h2>
          </div>

          <Link
            href="/video"
            className="hidden text-sm tracking-[0.25em] text-white/50 uppercase transition hover:text-[#d8b46a] md:block"
          >
            View All
          </Link>
        </div>

        {/* Video Slide */}
        <div className="mb-12 overflow-hidden">
          <div className="flex w-max animate-[slide_40s_linear_infinite] gap-8">
            {[...featuredWorks, ...featuredWorks].map((work, index) => (
              <div
                key={`${work.title}-${index}`}
                className="w-[560px] shrink-0"
              >
                <div className="aspect-video overflow-hidden bg-white/5">
                  <iframe
                    src={work.videoUrl}
                    title={work.title}
                    className="h-full w-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT ME */}
      <section id="about" className="px-10 py-28 md:px-40">
        <div className="grid grid-cols-[0.8fr_1.2fr] gap-16">
          <div className="relative aspect-[4/5] h-[70vh] max-h-[720px] overflow-hidden bg-white/5">
            <Image
              src="/Liam6.jpg"
              alt="Liam Parker"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-4 text-sm tracking-[0.35em] text-[#d8b46a] uppercase">
              About Me
            </p>

            <h2 className="mb-8 max-w-2xl text-4xl font-light leading-tight">
              Creating honest, cinematic stories through image and motion.
            </h2>

            <p className="max-w-xl text-sm leading-8 text-white/70">
              I’m a photographer and video director based in Vancouver, creating
              visual stories across cultures, people, and everyday moments. My
              work focuses on emotion, atmosphere, and human connection — from
              commercial films to documentary-driven visual projects.
            </p>

            <Link
              href="/about"
              className="mt-10 w-fit border border-[#d8b46a] px-8 py-3 text-sm tracking-[0.25em] text-[#d8b46a] uppercase transition hover:bg-[#d8b46a] hover:text-black"
            >
              More About Me
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-10 py-28 md:px-40">
        <div className="border-t border-white/10 pt-16">
          <p className="mb-4 text-sm tracking-[0.35em] text-[#d8b46a] uppercase">
            Contact
          </p>

          <div className="grid grid-cols-[1fr_auto] items-end">
            <h2 className="max-w-3xl text-5xl font-light leading-tight md:text-6xl">
              Let&apos;s create something meaningful together.
            </h2>

            <Link
              href="/contact"
              className="w-fit border border-[#d8b46a] px-9 py-3 text-sm tracking-[0.25em] text-[#d8b46a] uppercase transition hover:bg-[#d8b46a] hover:text-black"
            >
              Contact
            </Link>
          </div>

          <div className="mt-10 space-y-3 text-white/60">
            <p className="border-l-2 border-[#d8b46a] pl-4">
              Vancouver, BC, Canada
            </p>
            <p className="border-l-2 border-[#d8b46a] pl-4">
              Available for global projects
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
