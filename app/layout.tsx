import '../src/styles/global.scss';
import '@mantine/core/styles.css';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';

export const metadata = {
  title: 'Miniature spork',
  description: 'I have followed setup instructions carefully'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className="antialiased">
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
