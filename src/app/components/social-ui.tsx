import Link from "next/link";
import { buttonVariants } from "y/components/ui/button";
import { Icons } from "y/components/ui/icons";
import { cn } from "y/lib/utils";

interface SocialMediaLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

export function SocialUI() {
  const socialMediaLinks: SocialMediaLink[] = [
    { name: "GitHub", url: "https://github.com/iStorry", icon: <Icons.github className="h-4 w-4" /> },
    // { name: "Discord", url: "https://discord.com/invite/iStorry", icon: <Icons.discord className="h-4 w-4" /> },
    // { name: "Twitter", url: "https://twitter.com/iStorry", icon: <Icons.twitter className="h-4 w-4" /> },
    { name: "Steam", url: "https://steamcommunity.com/id/iStorry", icon: <Icons.steam className="h-4 w-4" /> },
    // { name: "LinkedIn", url: "https://linkedin.com/in/iStorry", icon: <Icons.linkedin className="h-4 w-4" /> },
    { name: "Email", url: "mailto:jatinx.lol@gmail.com", icon: <Icons.email className="h-4 w-4" /> },
  ];

  const renderSocialMediaLink = ({ name, url, icon }: SocialMediaLink) => (
    <Link key={name} href={url} className={cn(buttonVariants({ variant: "outline", size: "icon" }), "group")} passHref>
      {icon}
    </Link>
  );

  return <div className="flex gap-2 text-black dark:text-white">{socialMediaLinks.map(renderSocialMediaLink)}</div>;
}
