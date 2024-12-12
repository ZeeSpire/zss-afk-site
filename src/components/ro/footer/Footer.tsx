import { Edu_QLD_Beginner } from "next/font/google";
import Link from "next/link";

const dancingScript = Edu_QLD_Beginner({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Footer() {
  return (
    <div>
      <div className="px-2 mt-12 mb-10">
        <footer className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 bg-base-100 text-base-content">
          <nav>
            <span className="footer-title">Categorii</span><br /><hr className="mb-2" />
            <Link prefetch={false} href="/ro/romania" className="link link-hover">Romania</Link><br />
            <Link prefetch={false} href="/ro/italia" className="link link-hover">Italia</Link><br />
            <Link prefetch={false} href="/ro/grecia" className="link link-hover">Grecia</Link><br />
            <Link prefetch={false} href="/ro/danemarca" className="link link-hover">Danemarca</Link><br />
            <Link prefetch={false} href="/ro/bulgaria" className="link link-hover">Bulgaria</Link>
          </nav>

          <nav>
            <span className="footer-title">Social</span><br /><hr className="mb-2" />
            <Link prefetch={false} target="_blank" href="https://www.youtube.com/channel/UC6cO4CO-T5PGkeXWc8Sf1lw" className="link link-hover">YouTube</Link><br />
            <Link prefetch={false} target="_blank" href="https://www.instagram.com/afkology/" className="link link-hover">Instagram</Link><br />
            <Link prefetch={false} target="_blank" href="https://www.facebook.com/afkology/" className="link link-hover">Facebook</Link>
          </nav>

          <nav>
            <span className="footer-title">Legal</span><br /><hr className="mb-2" />
            <Link prefetch={false} href="/ro/politica-de-confidentialitate" className="link link-hover">Politica de confidentialitate</Link>
          </nav>

          <div className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-2">
            <p className={`${dancingScript.className} text-2xl text-center mt-5`}>Cele mai frumoase momente din viata se intampla offline. <br /> AFKology este o reamintire a acestui lucru.</p>
          </div>
        </footer>
      </div>
      <div className="mt-4 bg-base-100 px-2 py-2 text-slate-700 text-sm text-center border-t border-t-2 border-gray-100">
        <a href="https://www.zeespire.com" target="_blank" rel="noopener noreferrer" title="Visit ZeeSpire Software 2025">
          ZeeSpire Software 2025
        </a>
      </div>
    </div>
  );
}
