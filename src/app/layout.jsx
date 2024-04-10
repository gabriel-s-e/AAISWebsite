import { Azeret_Mono } from "next/font/google"
import { Poppins } from "next/font/google"

import "../app/styles/globals.css"

const azaret_mono = Azeret_Mono({
  subsets: ["latin"],
  weight: ['800','400'],
})
const poppins = Poppins({
  subsets: ["latin"],
  weight: ['800','400'],
})

export const metadata = {
  title: "AAIS",
  description: "Aggie Artificial Intelligence Society",
};

export default function RootLayout({ children }) {
  return (
     <html lang="en" >
       <body>{children}</body>
     </html>
   )
 }