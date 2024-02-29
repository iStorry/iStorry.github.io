import Link from "next/link";

export function MainFooter() {
  return (
    <footer className="bottom-0 z-40 border-t bg-background">
      <div className="container flex h-16 items-center justify-end py-4">
        <span className="text-sm text-neutral-500">
          <Link href="https://github.com/iStorry">@iStorry</Link>
        </span>
      </div>
    </footer>
  );
}
