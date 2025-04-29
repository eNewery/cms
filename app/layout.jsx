
import { UserProvider } from "./components/context";
import "./globals.css";


export const metadata = {
  title: "CMS Panel",
  description: "CMS Panel with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
      <body>
        {children}
      </body>
      </UserProvider>
    </html>
  );
}
