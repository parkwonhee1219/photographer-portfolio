"use client";

const skills = [
  {
    title: "Expertise",
    items: [
      "Commercial Films",
      "Documentary Production",
      "Branded Content",
      "Interview Direction",
      "Visual Storytelling",
      "Creative Development",
    ],
  },
  {
    title: "Approach",
    items: [
      "Human-Centered Storytelling",
      "Authentic Visual Narratives",
      "Cross-Cultural Communication",
      "Collaborative Production",
      "Emotion-Driven Editing",
      "Audience-Focused Content",
    ],
  },
  {
    title: "Tools",
    items: [
      "Sony FX Series",
      "RED Digital Cinema",
      "Adobe Premiere Pro",
      "DaVinci Resolve",
      "Adobe After Effects",
      "Adobe Lightroom",
    ],
  },
  {
    title: "Languages",
    items: [
      "English — Native",
      "French — Professional Working Proficiency",
    ],
  },
];

import Navbar from "@/components/navbar";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navbar />

      {/* About */}
      <section className="mx-auto grid max-w-7xl items-start gap-25 px-10 pb-28 md:grid-cols-[0.9fr_1.1fr] md:px-20">
        {/* Images */}

        <div className="relative aspect-[4/5] h-[70vh] overflow-hidden">
          <img
            src="/Liam5.jpg"
            alt="Behind the scenes"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="pt-0">
          <h1 className="mb-8 max-w-xl text-2xl font-normal leading-[1.15] text-[#d8b46a] md:text-3xl">
            Stories Found in Everyday Moments
          </h1>

          <div className="max-w-lg space-y-5 text-sm font-light leading-8 text-white/75">
            <p>I grew up surrounded by stories.</p>

            <p>
              My mother worked as a local journalist, and my father spent his
              days building things by hand. Watching them taught me that every
              person, place, and object carries its own story.
            </p>

            <p>That curiosity eventually led me to filmmaking.</p>

            <p>
              Over the years, I have worked across commercial productions,
              documentaries, and digital content, developing a visual style
              rooted in authenticity and human connection.
            </p>

            <p>
              Rather than chasing trends, I focus on creating work that feels
              honest, timeless, and emotionally engaging.
            </p>

            <p>
              I find inspiration in everyday moments — conversations with
              strangers, quiet city streets, long train rides, and the subtle
              details people often overlook.
            </p>

            <p>
              Whether collaborating with brands, communities, or individuals, my
              goal is always the same: to create visual stories that people can
              genuinely connect with.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-[#1A1A1A] px-10 py-24 md:px-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-3xl font-light text-[#d8b46a] md:text-5xl">
            Skills
          </h2>

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => (
              <div key={skill.title}>
                <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#d8b46a]">
                  {skill.title}
                </h3>

                <ul className="space-y-3 text-sm font-light leading-7 text-white/70">
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
