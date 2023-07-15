import { Metadata } from "next";

import { config } from "@core";

/**
 * Shared variables.
 * 
 * @remarks
 * These variables are used in multiple places in the metadata to avoid repetition.
 */
const title = "Steve McKeogh | Full Stack Software Engineer | TypeScript, Node.js, React, GraphQL, PostgreSQL | London, UK";
const colors = {
  primary: "#66bb6a",
};
export const descriptions = {
  short: "Passionate and experienced Full Stack Software Engineer based in London. Specialising in TypeScript, Node.js, React, GraphQL, and PostgreSQL.",
  long: "Seasoned Full Stack Staff Software Engineer with over two decades of expertise. Specialising in TypeScript, Node.js, React, GraphQL, and PostgreSQL, with a well-rounded skill set for innovative software solutions.",
};

/**
 * App metadata.
 * 
 * @remarks
 * The metadata object is exported directly to the app layout for Next.js to compile into the <head>.
 */
export const metadata: Metadata = {
  title,
  description: descriptions.short,
  keywords: ["full stack software engineer", "TypeScript", "Node.js", "React", "GraphQL", "PostgreSQL"],
  authors: { name: "Steve McKeogh" },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    viewportFit: "cover",
  },
  metadataBase: new URL(config.app.url),
  alternates: {
    canonical: "/",
  },
  applicationName: title,
  colorScheme: "dark",
  robots: {
    index: true,
    follow: true,
  },
  themeColor: colors.primary,
  openGraph: {
    siteName: title,
    type: "website",
    locale: "en_GB",
    alternateLocale: "en_US",
    url: config.app.url,
    title,
    description: descriptions.long,
  },
  appleWebApp: {
    title,
  },
  manifest: "/manifest.json",
};