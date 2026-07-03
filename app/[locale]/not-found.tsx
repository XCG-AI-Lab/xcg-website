import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-32 text-center">
      <p className="font-display text-7xl font-extrabold text-gold-400">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold">Page not found · 页面未找到</h1>
      <p className="mt-2 text-ink-600">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <div className="mt-8 flex gap-4">
        <Link href="/en" className="rounded-lg bg-gold-400 px-5 py-2.5 font-bold text-ink-900 hover:bg-gold-300">
          Home
        </Link>
        <Link href="/en/services" className="rounded-lg border border-ink-200 px-5 py-2.5 font-semibold text-ink-800 hover:border-gold-400">
          Our Services
        </Link>
      </div>
    </div>
  );
}
