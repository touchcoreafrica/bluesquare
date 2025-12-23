"use client";

import Link from "next/link";

export default function ThankYouClient() {
  return (
    <div className="min-h-screen bg-[#0B0F14] flex flex-col">
      <div className="w-full max-w-3xl mx-auto px-4 py-16 flex-1 flex items-center">
        <div className="w-full rounded-2xl border border-white/10 bg-[#0F1621] p-6 sm:p-10 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-emerald-500/15 flex items-center justify-center border border-emerald-500/25">
              <span className="text-emerald-400 text-2xl">✓</span>
            </div>

            <div className="flex flex-col">
              <h1 className="text-2xl sm:text-3xl font-bold text-white">
                Thank you!
              </h1>
              <p className="text-sm text-white/60">
                Your request has been received.
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <p className="text-white/80">
              We’ve received your submission and our team will reach out soon.
            </p>

            <div className="rounded-xl bg-white/5 border border-white/10 p-4">
              <p className="text-sm text-white/70">
                If you need urgent support, reply to the confirmation email (if
                provided) or contact us directly.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-white text-black px-5 py-3 text-sm font-semibold hover:bg-white/90 transition"
            >
              Back to Home
            </Link>

            <Link
              href="/contact-us"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white px-5 py-3 text-sm font-semibold hover:bg-white/10 transition"
            >
              Contact Us
            </Link>
          </div>

          <div className="mt-6 text-xs text-white/50">
            You can close this page safely.
          </div>
        </div>
      </div>
    </div>
  );
}
