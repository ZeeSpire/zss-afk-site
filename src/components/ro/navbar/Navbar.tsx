import Link from "next/link";
import Image from 'next/image';
import logo from '../../../../public/logo.jpg'
import LanguageSwitcher from "../../languageswitcher/LanguageSwitcher";

export default function Navbar({ enUrl }: { enUrl: string }) {
    return (
        <div className="navbar pb-9 pt-9">
            <div className="navbar-start">
                <Image src={logo} className="md:hidden" alt="AFKology logo" priority />
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link  prefetch={false} href="/ro">Acasa</Link></li>
                    <li><Link  prefetch={false} href="/ro/despre-noi">Despre Noi</Link></li>
                </ul>

                <Link  prefetch={false} href="/ro"><Image className="mx-2" src={logo} alt="AFKology logo" priority /></Link>

                <ul className="menu menu-horizontal px-1">
                    <li className="z-[1]">
                        <details>
                            <summary>Categorii</summary>
                            <ul className="p-2">
                                <li><Link  prefetch={false} href="/ro/romania">Romania</Link></li>
                                <li><Link  prefetch={false} href="/ro/italia">Italia</Link></li>
                                <li><Link  prefetch={false} href="/ro/grecia">Grecia</Link></li>
                                <li><Link  prefetch={false} href="/ro/danemarca">Danemarca</Link></li>
                                <li><Link  prefetch={false} href="/ro/bulgaria">Bulgaria</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li><Link  prefetch={false} href="/ro/contact">Contact</Link></li>
                    <li className="md:hidden"><LanguageSwitcher language="English" url={enUrl} type="simple"/></li>
                </ul>
            </div>
            <div className="navbar-end">
            <LanguageSwitcher language="English" url={enUrl} type="button"/>

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden" aria-label="Mobile dropdown menu">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow mr-3">
                        <li><Link  prefetch={false} href="/ro">Home</Link></li>
                        <li><Link  prefetch={false} href="/ro/despre-noi">Despre noi</Link></li>
                        <li>
                            <details>
                                <summary>Categorii</summary>
                                <ul className="p-2">
                                    <li><Link  prefetch={false} href="/ro/romania">Romania</Link></li>
                                    <li><Link  prefetch={false} href="/ro/italia">Romania</Link></li>
                                    <li><Link  prefetch={false} href="/ro/grecia">Grecia</Link></li>
                                    <li><Link  prefetch={false} href="/ro/danemarca">Danemarca</Link></li>
                                    <li><Link  prefetch={false} href="/ro/bulgaria">Bulgaria</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li><Link  prefetch={false} href="/ro/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}