"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ContactModal from "../components/ContactModal";

const videos = [
  {
    title: "Corepliance Overview",
    src: "/assets/Corepliance%20Overview.mp4",
  },
  {
    title: "Corepliance MRA Report and evidence Portal",
    src: "/assets/Corepliance%20MRA%20Report%20%26%20Evidence%20portal.mp4",
  },
];

export default function VideosPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white px-6 py-8 sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <header className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" aria-label="Go to Corepliance landing page">
            <Image
              src="/assets/logo.svg"
              alt="Corepliance logo"
              width={120}
              height={120}
              priority
            />
          </Link>

          <Link
            href="/"
            className="rounded-[14px] border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
          >
            Back to Corepliance landing page
          </Link>
        </header>

        <section className="space-y-8">
          {videos.map((video) => (
            <article
              key={video.title}
              className="space-y-4 rounded-2xl border border-slate-200 p-4 sm:p-6"
            >
              <h2 className="text-xl font-semibold text-slate-900">{video.title}</h2>

              <video
                className="w-full rounded-xl bg-black"
                controls
                preload="metadata"
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </article>
          ))}
        </section>

        <section className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-2xl font-semibold text-slate-900">Contact Corepliance</h2>
          <p className="mt-2 text-sm text-slate-600">
            Use the existing contact form and we&apos;ll follow up with you.
          </p>
          <button
            type="button"
            onClick={() => setIsContactOpen(true)}
            className="mt-4 rounded-[16px] bg-[#3073AF] px-6 py-3 text-base font-medium text-white transition hover:bg-[#265d8f]"
          >
            Open contact form
          </button>
        </section>
      </div>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        hidden
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>
            Don&apos;t fill this out: <input name="bot-field" />
          </label>
        </p>
        <input name="firstName" />
        <input name="lastName" />
        <input name="lawFirm" />
        <input name="email" />
        <textarea name="message" />
      </form>
    </main>
  );
}
