"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      position="top-right"
      duration={2000}
      richColors
      closeButton
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--success-bg": "hsl(142 76% 36%)",
          "--success-text": "hsl(355 7% 97%)",
          "--error-bg": "hsl(0 84% 60%)",
          "--error-text": "hsl(355 7% 97%)",
          "--warning-bg": "hsl(48 96% 53%)",
          "--warning-text": "hsl(355 7% 97%)",
          "--info-bg": "hsl(199 89% 48%)",
          "--info-text": "hsl(355 7% 97%)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
