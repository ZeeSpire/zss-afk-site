import Cookies from 'js-cookie';

export const addAfkLanguageCookie = (locale: string) => {
    if (process.env.VERCEL) {
        console.log(">>> on VERCEL >>> setting AFK_LOCALE")
        Cookies.set('AFK_LOCALE', locale, { expires: 365 });
    }
};