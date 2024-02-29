"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SocialUI } from "y/app/components/social-ui";
import { LampContainer } from "y/components/ui/lamp";

export function HomePageUI() {
  const motionProps = {
    initial: { opacity: 0, y: 100 },
    whileInView: { opacity: 1, y: 0 },
    transition: {
      delay: 0.3,
      duration: 0.8,
      ease: "easeInOut",
    },
  };

  return (
    <LampContainer>
      <motion.h1
        {...motionProps}
        className="mt-8 bg-gradient-to-br from-slate-100 to-slate-300 bg-clip-text py-4 text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Hi, I&apos;m Jatin
      </motion.h1>
      <motion.div {...motionProps} className="container mt-6 flex flex-col gap-6 lg:ml-8">
        <p className="text-start text-sm text-slate-600 dark:text-white">
          I&apos;m a passionate software engineer and full-stack developer who thrives on building things. Currently, I&apos;m honing my
          skills at <Link href="https://smallworld.asia"> @smallworld</Link>.
        </p>
        <p className="text-start text-sm text-slate-600 dark:text-white">
          While I wield Swift, Python, TypeScript, and JavaScript like a coding ninja, my love for technology extends beyond the screen. In
          my free time, you&apos;ll find me brewing a cup of coffee, getting lost in music, or diving into the worlds of games.
        </p>
        <SocialUI />
      </motion.div>
    </LampContainer>
  );
}
