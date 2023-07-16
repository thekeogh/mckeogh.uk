import { date } from "@utils";

import { Profile } from "@components";

import * as Sections from "@sections";

import style from "./style.module.css";

export default function Page() {
  return (
    <>
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
        <a href="/download" className={style.button}>
          Download CV
        </a>
      </header>
      <main>
        <Sections.Intro />
        <Sections.Who />
        <Sections.Skills />
        <Sections.Experience />
      </main>
    </>
  );
}
