import Link from "next/link";
import Image from 'next/image';
import logo from '../../../../../public/logo.jpg'
import roFlag from '../../../../../public/helper/ro.png'

export default function Navbar({ roUrl }: { roUrl: string }) {
    return (
        <div className="navbar pb-9 pt-9">
            <div className="navbar-start">
                <Image src={logo} className="md:hidden" alt="AFKology logo" priority />
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/news">News</Link></li>
                </ul>

                <Image className="mx-2" src={logo} alt="AFKology logo" priority />

                <ul className="menu menu-horizontal px-1">
                    <li className="z-[1]">
                        <details>
                            <summary>Categories</summary>
                            <ul className="p-2">
                                <li><Link href="/romania">Romania</Link></li>
                                <li><Link href="/italy">Italy</Link></li>
                                <li><Link href="/greece">Greece</Link></li>
                                <li><Link href="/denmark">Denmark</Link></li>
                                <li><Link href="/bulgaria">Bulgaria</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li className="md:hidden"><Link href={roUrl}><Image src={roFlag} alt="Romanian language" width={30} height={20} /></Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div tabIndex={0} className="btn btn-ghost btn-circle">
                    <Link href={roUrl}><Image src={roFlag} alt="Romanian language" width={30} height={20} /></Link>
                </div>

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow mr-3">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li>
                            <details>
                                <summary>Categories</summary>
                                <ul className="p-2">
                                    <li><Link href="/romania">Romania</Link></li>
                                    <li><Link href="/italy">Italy</Link></li>
                                    <li><Link href="/greece">Greece</Link></li>
                                    <li><Link href="/denmark">Denmark</Link></li>
                                    <li><Link href="/bulgaria">Bulgaria</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li><Link href="/news">News</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div >

    );
}