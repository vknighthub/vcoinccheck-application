import { NextIntlClientProvider } from 'next-intl/client';
import { notFound } from 'next/navigation';
import {ReactNode} from 'react';


type Props = {
    children: ReactNode;
    params: { locale: string };
};

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'vn' }, { locale: 'jp' }];
}

export default async function LocaleLayout({ children, params: { locale } }: Props) {
    let messages;
    try {
        messages = (await import(`../../messages/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }

    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}