"use client";

import Image from 'next/image';
import enFlag from '../../../public/helper/en.jpg'
import roFlag from '../../../public/helper/ro.png'
import Link from 'next/link';
import { addAfkLanguageCookie } from '@/functions';

export default function LanguageSwitcher({ language, url }: { language: string, url: string }) {
    let flag = enFlag;
    let code = 'en';
    if (language === "Romanian") {
        flag = roFlag;
        code = 'ro';
    }
    return (
        <Link href={url}><Image src={flag} alt={`${language} language`} width={30} height={20} onClick={() => addAfkLanguageCookie(code)} /></Link>
    );
}

