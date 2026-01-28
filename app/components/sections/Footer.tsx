"use client";

import { useState } from "react";
import Image from "next/image";
import PolicyModal from "../PolicyModal";

export default function Footer() {
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

      <h3 className="text-base font-semibold text-slate-900">
        What information we collect
      </h3>
      <p>When you contact us using a form on our website, we may collect:</p>
      <ul className="list-disc pl-5">
        <li>Your name</li>
        <li>Your email address</li>
        <li>Any message you choose to send us</li>
      </ul>

      <h3 className="text-base font-semibold text-slate-900">
        How we use your information
      </h3>
      <p>We only use your information to:</p>
      <ul className="list-disc pl-5">
        <li>Respond to your enquiry</li>
        <li>Communicate with you about your request</li>
      </ul>
      <p>
        We do not use your details for marketing unless you have specifically
        asked us to.
      </p>

      <h3 className="text-base font-semibold text-slate-900">
        How we store your information
      </h3>
      <p>
        Your information is stored securely and only accessed when necessary to
        respond to your enquiry. We keep your data only for as long as needed.
      </p>

      <h3 className="text-base font-semibold text-slate-900">
        Sharing your information
      </h3>
      <p>
        We do not sell or share your personal data with third parties, except
        where required to operate our website or respond to you (for example,
        email services).
      </p>

      <h3 className="text-base font-semibold text-slate-900">Your rights</h3>
      <p>
        You have the right to request access to, correction of, or deletion of
        your personal data. To make a request, please contact us.
      </p>

      <h3 className="text-base font-semibold text-slate-900">Contact us</h3>
      <p>Email: Corepliance@Outlook.com</p>
      <p>Address: 5 Church Street, Ystrad Mynach CF82 7EE</p>
    </div>
  );

  const cookieContent = (
    <div className="space-y-4">
      <p>Last updated: 22 January 2026</p>

      <h3 className="text-base font-semibold text-slate-900">
        What are cookies?
      </h3>
      <p>
        Cookies are small text files that are placed on your device when you
        visit a website. They help the website function properly and improve
        your experience.
      </p>

      <h3 className="text-base font-semibold text-slate-900">
        How we use cookies
      </h3>
      <p>We use cookies on this website to:</p>
      <ul className="list-disc pl-5">
        <li>Make sure the website works correctly</li>
        <li>
          Understand how visitors use our website (for example, through basic
          analytics)
        </li>
      </ul>
      <p>We do not use cookies to personally identify you.</p>

      <h3 className="text-base font-semibold text-slate-900">
        Types of cookies we use
      </h3>
      <p>Essential cookies:</p>
      <p>
        These cookies are necessary for the website to function properly and
        cannot be switched off.
      </p>
      <p>Analytics cookies (if used):</p>
      <p>
        These cookies help us understand how visitors use our website so we can
        improve it.
      </p>

      <h3 className="text-base font-semibold text-slate-900">
        Managing cookies
      </h3>
      <p>
        You can control or delete cookies through your browser settings at any
        time. Please note that disabling cookies may affect how the website
        functions.
      </p>

      <h3 className="text-base font-semibold text-slate-900">
        Changes to this policy
      </h3>
      <p>
        We may update this Cookie Policy from time to time. Any changes will be
        posted on this page with an updated revision date.
      </p>

      <h3 className="text-base font-semibold text-slate-900">Contact us</h3>
      <p>If you have any questions about our use of cookies, please contact us at:</p>
      <p>Email: Corepliance@Outlook.com</p>
    </div>
  );

  const policyTitle =
    policyOpen === "privacy"
      ? "Privacy Policy"
      : policyOpen === "cookie"
      ? "Cookie Policy"
      : "";

  return (
    <footer className="relative h-72 w-full overflow-hidden">
      <Image
        src="/assets/section-5-back.svg"
        alt=""
        fill
        className="object-cover"
        priority
      />
      <Image
        src="/assets/logo.svg"
        alt=""
        width={160}
        height={160}
        className="absolute left-[59px] top-[32px] rounded-[50px]"
      />
      <div className="absolute left-[59px] bottom-[32px] text-white text-sm leading-6">
        <div>Copyright © 2026 – Corepliance Ltd. All rights reserved</div>
        <div>Corepliance Ltd – Co Reg No: 16582909</div>
      </div>
      <button
        type="button"
        onClick={() => setPolicyOpen("cookie")}
        className="absolute bottom-[32px] right-[59px] cursor-pointer text-sm text-white transition-opacity hover:opacity-80 hover:underline"
      >
        Cookie Policy
      </button>
      <button
        type="button"
        onClick={() => setPolicyOpen("privacy")}
        className="absolute bottom-[64px] right-[59px] cursor-pointer text-sm text-white transition-opacity hover:opacity-80 hover:underline"
      >
        Privacy Policy
      </button>
      <PolicyModal
        isOpen={policyOpen !== null}
        onClose={() => setPolicyOpen(null)}
        title={policyTitle}
        content={policyOpen === "privacy" ? privacyContent : cookieContent}
      />
    </footer>
  );
}
