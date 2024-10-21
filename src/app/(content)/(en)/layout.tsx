import GoogleAnalytics from "@/components/googleanalytics/GoogleAnalytics";
import Footer from "../../../components/en/footer/Footer";
import "../../globals.css";
import { Roboto } from "next/font/google";
import LocaleRedirecter from "@/components/localeredirecter/LocaleRedirecter";

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function EnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="pastel">
      <GoogleAnalytics GA_MEASUREMENT_ID='G-2E08R5263Y' />
      <LocaleRedirecter />
      <body className={`${roboto.className} min-h-screen flex flex-col`}>
        <div className="flex flex-col flex-grow container mx-auto px-4">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}