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
    let html;
    if (type === 'simple') {
        html = <Link href={url}><Image src={flag} alt={`${language} language`} width={30} height={20} onClick={() => addAfkLanguageCookie(code)} /></Link>
    }
    if (type === 'button') {
        html = <div tabIndex={0} className="btn btn-ghost btn-circle"> <Link href={url}><Image src={flag} alt={`${language} language`} width={30} height={20} onClick={() => addAfkLanguageCookie(code)} /></Link> </div>
    }
    return html;
}

