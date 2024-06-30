import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import UserDetailsState from "./_context/UserDetailContext";
import ShowToast from "./_context/showToast";
const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <UserDetailsState>
        <html lang="en">
          <body className={inter.className}>
            <ShowToast>{children}</ShowToast>
          </body>
        </html>
      </UserDetailsState>
    </ClerkProvider>
  );
}
