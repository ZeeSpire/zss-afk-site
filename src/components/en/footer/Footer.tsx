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
      <div className="px-2 mt-12">
        <footer className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 bg-base-100 text-base-content">
          <nav>
            <span className="footer-title">Categories</span><br /><hr className="mb-2" />
            <Link prefetch={false} href="/romania" className="link link-hover">Romania</Link><br />
            <Link prefetch={false} href="/italy" className="link link-hover">Italy</Link><br />
            <Link prefetch={false} href="/greece" className="link link-hover">Greece</Link><br />
            <Link prefetch={false} href="/denmark" className="link link-hover">Denmark</Link><br />
            <Link prefetch={false} href="/bulgaria" className="link link-hover">Bulgaria</Link>
          </nav>

          <nav>
            <span className="footer-title">Social</span><br /><hr className="mb-2" />
            <Link prefetch={false} href="https://www.youtube.com/channel/UC6cO4CO-T5PGkeXWc8Sf1lw" className="link link-hover">YouTube</Link><br />
            <Link prefetch={false} href="https://www.instagram.com/afkology/" className="link link-hover">Instagram</Link><br />
            <Link prefetch={false} href="https://www.facebook.com/afkology/" className="link link-hover">Facebook</Link>
          </nav>

          <nav>
            <span className="footer-title">Legal</span><br /><hr className="mb-2" />
            <Link prefetch={false} href="/privacy-policy" className="link link-hover">Privacy Policy</Link>
          </nav>

          <div className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-2">
            <p className={`${dancingScript.className} text-2xl text-center mt-5`}>The most precious moments in life happen offline. <br /> AFKology is a remembrance of that.</p>
          </div>
        </footer>
      </div>
      <div className="mt-4 bg-base-100 px-2 py-2 text-slate-700 text-sm text-center border-t border-t-2 border-gray-100">
        <a href="https://www.zeespire.com" target="_blank" rel="noopener noreferrer" title="Visit ZeeSpire Software 2024">
          ZeeSpire Software 2024
        </a>
      </div>
    </div>
  );
}
