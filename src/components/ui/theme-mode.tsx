"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { PiDevicesFill, PiMoonFill, PiSunFill } from "react-icons/pi";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="default" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="my-3">
        <DropdownMenuItem className="flex items-center gap-2" onClick={() => setTheme("light")}>
          <PiSunFill /> Light
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-2" onClick={() => setTheme("dark")}>
          <PiMoonFill /> Dark
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-2" onClick={() => setTheme("system")}>
          <PiDevicesFill /> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
