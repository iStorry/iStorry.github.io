import { type Metadata } from "next";
import { HomePageUI } from "y/app/components/home-page-ui";
import { MainFooter } from "y/components/ui/main-footer";
import { MainHeader } from "y/components/ui/main-header";

export const metadata: Metadata = {
  title: "Home",
  description: "Jatin's personal website.",
};

export default function HomePage() {
  return <HomePageUI />;
}
