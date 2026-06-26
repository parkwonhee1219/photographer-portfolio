"use client";

import Navbar from "@/components/navbar";
import { photos } from "@/data/photos";
import { useState } from "react";

const categories = ["All", "Commercial", "Portrait", "Wedding", "Lifestyle"];

export default function PhotoPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof photos)[0] | null>(
    null,
  );

  const filteredPhotos =
    selectedCategory === "All"
      ? photos
      : photos.filter((photo) => photo.category === selectedCategory);

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Category Filter */}
      <section className="px-12 pb-16">
        <div className="flex flex-wrap justify-center gap-10 pt-1 text-sm font-light">
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

      {/* Photo Grid */}
      <section className="px-12 pb-24 md:px-12">
        <div className="mx-auto max-w-5xl columns-3 gap-5">
          {filteredPhotos.map((photo) => (
            <button
              key={photo.src}
              onClick={() => setSelectedPhoto(photo)}
              className="mb-5 block w-full break-inside-avoid overflow-hidden bg-white/5 text-left"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full transition duration-500 hover:scale-105 hover:opacity-80"
              />
            </button>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-6">
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute right-8 top-6 text-4xl font-light text-white/70 hover:text-white"
          >
            ×
          </button>

          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute inset-0"
          />

          <div className="relative z-10 max-w-5xl">
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.title}
              className="max-h-[80vh] w-auto object-contain"
            />

            <div className="mt-5">
              <p className="text-xs uppercase tracking-[0.3em] text-[#d8b46a]">
                {selectedPhoto.category}
              </p>
              <h2 className="mt-2 text-xl font-light">{selectedPhoto.title}</h2>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
