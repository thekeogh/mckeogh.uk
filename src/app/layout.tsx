import "@src/css/global.css";
import "@src/css/utilities.css";

import { fonts } from "@core";

import { date } from "@utils";

import { Profile } from "@components";

import style from "./layout.module.css";

export { metadata } from "@core";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <html lang="en-GB" className={`${fonts.rubik.variable} ${fonts.futura.variable}`}>
      <body>
        <header className={style.header}>
          <Profile title="Name">
            Steve McKeogh
          </Profile>
          <Profile title="Role">
            Staff Software Engineer
          </Profile>
          <Profile title="Experience">
            {date.getYears(new Date("1999-08-01"))} Years
          </Profile>
          <Profile title="Location">
            London, UK
          </Profile>
          <Profile title="Email">
            steve.mckeogh@gmail.com
          </Profile>
          <Profile title="Phone">
            +44 (0)7590 609680
          </Profile>
          <Profile title="Date of Birth">
            18th November 1981
          </Profile>
          <Profile title="Looking">
            Yes, open to opportunities
          </Profile>
        </header>
        {children}
      </body>
    </html>
  );
}
