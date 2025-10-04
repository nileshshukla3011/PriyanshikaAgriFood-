import { Inter } from 'next/font/google';
import './globals.css';
import { generateMetadata } from './metadata';

const inter = Inter({ subsets: ['latin'] });

export { generateMetadata };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}