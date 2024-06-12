import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <i className={resolvedTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun'}></i> {/* Uso directo de clases de Font Awesome */}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
        <i className="fas fa-sun pr-2"></i>Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
        <i className="fas fa-moon pr-3"></i>Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
        <i className="fas fa-gear pr-2"></i>System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
