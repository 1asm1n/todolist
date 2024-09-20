import type { Metadata } from "next";
import "./globals.scss";
import { TaskProvider } from "@/contexts/TaskContext";

export const metadata: Metadata = {
  title: "FocalPoint",
  description: "FocalPoint, a sua plataforma de tarefas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TaskProvider>
          {children}
        </TaskProvider>
      </body>
    </html>
  );
}
