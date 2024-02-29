"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "y/components/ui/button";
import { Icons } from "y/components/ui/icons";

const MainActionMenu = React.memo(() => {
  const { theme, setTheme } = useTheme();

  const onThemeButtonClick = React.useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  return (
    <Button variant="ghost" size="icon" onClick={onThemeButtonClick}>
      {theme === "dark" ? <Icons.sun className="h-5 w-5" /> : <Icons.moon className="h-5 w-5" />}
    </Button>
  );
});

MainActionMenu.displayName = "MainActionMenu";
export { MainActionMenu };
