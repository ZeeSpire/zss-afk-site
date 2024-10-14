import finalCutPro from "../../public/final-cut-pro-on-ipad/finalcutx-vl.jpg"
import davinciResolveComingToIpads from "../../public/davinci-resolve-coming-to-ipads/DaVinci-Resolve-for-iPad-Color.jpg"
import orderYourIphone14Today from "../../public/order-your-iphone-14-today/kisspng-apple-image-iphone-4-logo-photograph-remdt-by-5d2c81520ec384.9415367415631977780605_p7vrck.jpg"
import iphone15PeriscopeCamera from "../../public/iphone-15-periscope-camera/iphone14_kvpdor.jpg"
import instagramSelfieSecurityCheck from "../../public/instagram-selfie-security-check/Instagram-logo-with-brush-PNG_znhshm.jpg"
import { News } from "@/model/news"

export function getNews(): News[] {
    return news;
  }

export const news = [
    {
      slug: "final-cut-pro-on-ipad",
      title: "Final Cut Pro available on iPads",
      featured: finalCutPro
    },
    {
      slug: "davinci-resolve-coming-to-ipads",
      title: "Davinci Resolve coming to iPads",
      featured: davinciResolveComingToIpads
    },
    {
      slug: "order-your-iphone-14-today",
      title: "Order your iPhone 14 today",
      featured: orderYourIphone14Today
    },
    {
      slug: "iphone-15-periscope-camera",
      title: "iPhone 15 with periscope camera",
      featured: iphone15PeriscopeCamera
    },
    {
      slug: "instagram-selfie-security-check",
      title: "Instagram may soon check your real age using video selfies",
      featured: instagramSelfieSecurityCheck
    }
  ];