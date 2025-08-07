import type {Metadata} from "next";
import "../../globals.css";
import {NextIntlClientProvider} from "next-intl";
import {getMessages, setRequestLocale} from "next-intl/server";
import AutoLanguageRedirect from "@/app/AutoRedirector";

export const metadata: Metadata = {
    title: "Step into Dreamplay!",
    description: "Step into Dreamplay! 500% Welcome Bonus",
};

export default async function LocaleLayout({children, params}: {
    children: React.ReactNode;
    params: { locale: 'pt' }
}) {
    // @ts-ignore
    const {locale}: 'pt' = await params;
    const messages = await getMessages();

    setRequestLocale(locale);

    return (
        <html lang={locale}>
        <body className={`relative overflow-hidden`}>
        <NextIntlClientProvider messages={messages}>
        {/*<AutoLanguageRedirect/>*/}
            {children}
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
