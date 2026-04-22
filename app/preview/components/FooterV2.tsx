"use client";

import { useState } from "react";
import Image from "next/image";
import PolicyModal from "../../components/PolicyModal";

export default function FooterV2() {
  const [policyOpen, setPolicyOpen] = useState<null | "privacy" | "cookie">(null);

  const privacyContent = (
    <div className="space-y-4">
      <p>Last updated: 22 January 2026</p>

      <h3 className="text-base font-semibold text-slate-900">Who we are</h3>
      <p>
        This website is operated by Corepliance Ltd. If you contact us through
        this website, we will handle your personal information responsibly and
        in line with UK data protection law.
      </p>

      <h3 className="text-base font-semibold text-slate-900">What information we collect</h3>
      <p>When you contact us using a form on our website, we may collect:</p>
      <ul className="list-disc pl-5">
        <li>Your name</li>
        <li>Your email address</li>
        <li>Any message you choose to send us</li>
      </ul>

      <h3 className="text-base font-semibold text-slate-900">How we use your information</h3>
      <p>We only use your information to:</p>
      <ul className="list-disc pl-5">
        <li>Respond to your enquiry</li>
        <li>Communicate with you about your request</li>
      </ul>
      <p>We do not use your details for marketing unless you have specifically asked us to.</p>

      <h3 className="text-base font-semibold text-slate-900">How we store your information</h3>
      <p>
        Your information is stored securely and only accessed when necessary to respond to your
        enquiry. We keep your data only for as long as needed.
      </p>

      <h3 className="text-base font-semibold text-slate-900">Sharing your information</h3>
      <p>
        We do not sell or share your personal data with third parties, except where required to
        operate our website or respond to you (for example, email services).
      </p>

      <h3 className="text-base font-semibold text-slate-900">Your rights</h3>
      <p>
        You have the right to request access to, correction of, or deletion of your personal data.
        To make a request, please contact us.
      </p>

      <h3 className="text-base font-semibold text-slate-900">Contact us</h3>
      <p>Email: info@corepliance.co.uk</p>
    </div>
  );

  const cookieContent = (
    <div className="space-y-4">
      <p>Last updated: 22 January 2026</p>

      <h3 className="text-base font-semibold text-slate-900">What are cookies?</h3>
      <p>
        Cookies are small text files that are placed on your device when you visit a website. They
        help the website function properly and improve your experience.
      </p>

      <h3 className="text-base font-semibold text-slate-900">How we use cookies</h3>
      <p>We use cookies on this website to:</p>
      <ul className="list-disc pl-5">
        <li>Make sure the website works correctly</li>
        <li>Understand how visitors use our website (for example, through basic analytics)</li>
      </ul>
      <p>We do not use cookies to personally identify you.</p>

      <h3 className="text-base font-semibold text-slate-900">Types of cookies we use</h3>
      <p>Essential cookies:</p>
      <p>These cookies are necessary for the website to function properly and cannot be switched off.</p>
      <p>Analytics cookies (if used):</p>
      <p>These cookies help us understand how visitors use our website so we can improve it.</p>

      <h3 className="text-base font-semibold text-slate-900">Managing cookies</h3>
      <p>
        You can control or delete cookies through your browser settings at any time. Please note
        that disabling cookies may affect how the website functions.
      </p>

      <h3 className="text-base font-semibold text-slate-900">Changes to this policy</h3>
      <p>
        We may update this Cookie Policy from time to time. Any changes will be posted on this page
        with an updated revision date.
      </p>

      <h3 className="text-base font-semibold text-slate-900">Contact us</h3>
      <p>If you have any questions about our use of cookies, please contact us at:</p>
      <p>Email: info@corepliance.co.uk</p>
    </div>
  );

  const policyTitle =
    policyOpen === "privacy" ? "Privacy Policy" : policyOpen === "cookie" ? "Cookie Policy" : "";

  return (
    <footer className="bg-[var(--brand-navy)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-16">
        {/* Top: logo + contact + policies */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          {/* Logo + tagline */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/v2/icon-light.png"
                alt="Corepliance"
                width={40}
                height={40}
                className="h-9 w-9"
              />
              <span className="font-[family-name:var(--font-playfair)] text-xl font-medium tracking-wide">
                COREPLIANCE
              </span>
            </div>
            <p className="mt-5 max-w-sm font-[family-name:var(--font-lato)] text-sm font-light text-white/70">
              Regulator-ready AML compliance for conveyancing firms. Built by lawyers, for lawyers.
            </p>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="font-[family-name:var(--font-playfair)] text-sm font-medium uppercase tracking-wider text-[var(--brand-vivid)]">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 font-[family-name:var(--font-lato)] text-sm font-light text-white/80">
              <li>
                <a href="mailto:info@corepliance.co.uk" className="transition-colors hover:text-[var(--brand-vivid)]">
                  info@corepliance.co.uk
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-3">
            <h4 className="font-[family-name:var(--font-playfair)] text-sm font-medium uppercase tracking-wider text-[var(--brand-vivid)]">
              Legal
            </h4>
            <ul className="mt-4 space-y-2 font-[family-name:var(--font-lato)] text-sm font-light text-white/80">
              <li>
                <button
                  type="button"
                  onClick={() => setPolicyOpen("privacy")}
                  className="cursor-pointer transition-colors hover:text-[var(--brand-vivid)]"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setPolicyOpen("cookie")}
                  className="cursor-pointer transition-colors hover:text-[var(--brand-vivid)]"
                >
                  Cookie Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 font-[family-name:var(--font-lato)] text-xs font-light text-white/60 md:flex-row md:items-center md:justify-between">
          <div>Copyright © 2026 — Corepliance Ltd. All rights reserved.</div>
          <div>Corepliance Ltd — Co Reg No: 16582909</div>
        </div>
      </div>

      <PolicyModal
        isOpen={policyOpen !== null}
        onClose={() => setPolicyOpen(null)}
        title={policyTitle}
        content={policyOpen === "privacy" ? privacyContent : cookieContent}
      />
    </footer>
  );
}
