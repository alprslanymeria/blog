import 'lineicons/dist/lineicons.css'
import '@/public/output.css'
import { headers } from 'next/headers';

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children , params}) {

  const headersList = await headers();
  const currentUrl = headersList.get('x-url') || ''; // İsteğin tam URL'si
  const isCapsRoute = currentUrl.includes('/caps'); // `/caps` kontrolü

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="data:,"></link>
      </head>
      <body style={isCapsRoute ? { backgroundColor: '#1F222A', color: 'white' } : {}}>
        {children}
      </body>
    </html>
  );
}
