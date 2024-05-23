import { Rubik, Nunito } from "next/font/google";

/**
 * Rubik.
 * 
 * @label Google Font
 * 
 * @remarks
 * This font is used for titles throughout the website and is sourced from Google Fonts.
 */
const rubik = Rubik({
  weight: "800",
  subsets: ["latin"],
  variable: "--font-rubik",
  display: "swap",
});

/**
 * Montserrat.
 * 
 * @label Google Font
 * 
 * @remarks
 * This font is utilised for all text displayed on the site, excluding titles.
 */
const body = Nunito({
  weight: ["300", "400", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

export const fonts = { rubik, body };