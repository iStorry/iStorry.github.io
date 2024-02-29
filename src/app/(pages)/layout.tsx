interface PagesLayoutProps {
  children: React.ReactNode;
}

export default function PagesLayout({ children }: PagesLayoutProps) {
  return <div className="container lg:pl-12">{children}</div>;
}
