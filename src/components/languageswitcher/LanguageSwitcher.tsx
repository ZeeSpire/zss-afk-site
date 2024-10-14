"use client";

import Cookies from 'js-cookie';
import Image from 'next/image';
import enFlag from '../../../public/helper/en.jpg'
import roFlag from '../../../public/helper/ro.png'
import Link from 'next/link';

const switchLanguage = (locale: string) => {
    Cookies.set('AFK_LOCALE', locale, { expires: 365 });
};

export default function LanguageSwitcher({ language, url }: { language: string, url: string }) {
    let flag = enFlag;
    let code = 'en';
    if (language === "Romanian") {
        flag = roFlag;
        code = 'ro';
    }
    return (
        <Link href={url}><Image src={flag} alt={`${language} language`} width={30} height={20} onClick={() => switchLanguage(code)} /></Link>
    );
}

