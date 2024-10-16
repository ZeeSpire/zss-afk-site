"use client";

import Image from 'next/image';
import enFlag from '../../../public/helper/en.jpg'
import roFlag from '../../../public/helper/ro.png'
import Link from 'next/link';
import { addAfkLanguageCookie } from '@/functions';

export default function LanguageSwitcher({ language, url, type }: { language: string, url: string, type: string }) {
    let flag = enFlag;
    let code = 'en';
    if (language === "Romanian") {
        flag = roFlag;
        code = 'ro';
    }

    const handleLanguageChange = () => {
        addAfkLanguageCookie(code);
    };

    let html;
    if (type === 'simple') {
        html = (
            <Link href={url} onClick={handleLanguageChange}>
                <Image src={flag} alt={`${language} language`} width={30} height={20} />
            </Link>
        );
    }
    if (type === 'button') {
        html = (
            <div tabIndex={0} className="btn btn-ghost btn-circle">
                <Link href={url} onClick={handleLanguageChange}>
                    <Image src={flag} alt={`${language} language`} width={30} height={20} />
                </Link>
            </div>
        );
    }
    return <>{html}</>;
}

