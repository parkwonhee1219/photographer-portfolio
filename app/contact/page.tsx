import Navbar from "@/components/navbar";

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="px-12 pb-24">
        <div className="mx-auto grid max-w-6xl gap-16 py-10 grid-cols-[0.9fr_1fr]">
          {/* Left Side */}
          <div>
            <p className="mb-6 text-sm tracking-[0.35em] text-[#d8b46a] uppercase">
              Contact
            </p>

            <h1 className="mb-15 text-4xl font-extralight">
              Let&apos;s work together.
            </h1>

            <div className="space-y-10 text-white/70">
              <div>
                <h2 className="mb-4 text-sm tracking-[0.25em] uppercase text-white">
                  Based in
                </h2>

                <div className="space-y-3">
                  <p className="border-l-2 border-[#d8b46a] pl-4">
                    Vancouver, BC, Canada
                  </p>

                  <p className="border-l-2 border-[#d8b46a] pl-4">
                    Available for global projects
                  </p>
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-sm tracking-[0.25em] uppercase text-white">
                  Direct Contact
                </h2>

                <div className="space-y-3">
                  <div className="border-l-2 border-[#d8b46a] pl-4">
                    <a
                      href="mailto:joypwh0107@gmail.com"
                      className="transition hover:text-[#d8b46a]"
                    >
                      joypwh0107@gmail.com
                    </a>
                  </div>

                  <div className="border-l-2 border-[#d8b46a] pl-4">
                    <a
                      href="tel:+17789189902"
                      className="transition hover:text-[#d8b46a]"
                    >
                      +1 778-918-9902
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <form className="space-y-5">
            <div className="grid gap-5 grid-cols-2">
              <input
                type="text"
                placeholder="First Name"
                className="border border-white/10 bg-transparent px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-[#d8b46a]"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="border border-white/10 bg-transparent px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-[#d8b46a]"
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-white/10 bg-transparent px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-[#d8b46a]"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-white/10 bg-transparent px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-[#d8b46a]"
            />

            <textarea
              placeholder="Message"
              rows={6}
              className="w-full resize-none border border-white/10 bg-transparent px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-[#d8b46a]"
            />

            <button
              type="submit"
              className="border border-[#d8b46a] px-9 py-3 text-sm tracking-[0.25em] uppercase text-[#d8b46a] transition hover:bg-[#d8b46a] hover:text-black"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}