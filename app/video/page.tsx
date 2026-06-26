"use client";

import Navbar from "@/components/navbar";
import { works } from "@/data";
import { useState } from "react";

const categories = [
  "All",
  "Commercials",
  "Branded Content",
  "Documentary",
  "Independent Films",
];

export default function Video() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [openWorks, setOpenWorks] = useState<string[]>([]);

  const filteredWorks =
    selectedCategory === "All"
      ? works
      : works.filter((work) => work.category === selectedCategory);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Top Area */}
      <Navbar />

      <section className="px-12 pb-24">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-10 text-sm font-light pt-1">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`border-b pb-2 transition ${
                selectedCategory === category
                  ? "border-[#d8b46a] text-[#d8b46a]"
                  : "border-transparent text-white hover:text-[#d8b46a]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Works List */}
      <section className="px-4 py-10 md:px-12 py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 md:gap-10">
          {filteredWorks.map((work) => {
            const isOpen = openWorks.includes(work.title);

            return (
              <article
                key={work.title}
                className={`rounded-2xl p-4 transition duration-300 ${
                  isOpen
                    ? "bg-[#151515] shadow-2xl ring-1 ring-white/10"
                    : "bg-transparent"
                }`}
              >
                {/* Video */}
                <div className="aspect-video overflow-hidden rounded-md bg-white/5">
                  {work.type === "youtube" ? (
                    <iframe
                      src={work.videoUrl}
                      title={work.title}
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <video
                      src={work.videoUrl}
                      className="h-full w-full object-cover"
                      controls
                      muted
                    />
                  )}
                </div>

                {/* Arrow Button */}
                <div className="mt-4 flex justify-start">
                  <button
                    onClick={() => {
                      if (isOpen) {
                        setOpenWorks(
                          openWorks.filter((title) => title !== work.title),
                        );
                      } else {
                        setOpenWorks([...openWorks, work.title]);
                      }
                    }}
                    className="group flex items-center gap-2 text-white/40 transition hover:text-[#d8b46a]"
                  >
                    <span className="text-xl transition-transform duration-300 group-hover:translate-y-1">
                      {isOpen ? "↑" : "↓"}
                    </span>

                    <span className="text-[10px] uppercase tracking-[0.3em]">
                      Details
                    </span>
                  </button>
                </div>

                {/* Detail */}
                {isOpen && (
                  <div className="mt-5 space-y-5 border-t border-white/10 pt-5">
                    {/* <div>
                      <p className="mb-2 text-xs uppercase tracking-[0.25em] text-white/40">
                        Title
                      </p>
                      <p className="text-sm font-light text-white/80">
                        {work.title}
                      </p>
                    </div> */}

                    <div>
                      <p className="mb-2 text-xs uppercase tracking-[0.25em] text-white/40">
                        Role
                      </p>
                      <p className="text-sm font-light text-white/70">
                        {work.role}
                      </p>
                    </div>

                    <div>
                      <p className="mb-2 text-xs uppercase tracking-[0.25em] text-white/40">
                        Overview
                      </p>
                      <p className="text-sm font-light leading-6 text-white/60">
                        {work.overview}
                      </p>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
