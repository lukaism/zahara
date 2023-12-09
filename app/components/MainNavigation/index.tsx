"use client";
import { useSession } from "next-auth/react";
import { redirect, usePathname } from "next/navigation";
import { Container, AppBar, Toolbar } from "@mui/material";
import TextButtonLink from "../TextButtonLink";

export default function MainNavigation() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/");
    },
  });

  return (
    <>
      <AppBar>
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <TextButtonLink mainNavigation={true} href={"/"} name={"Home"} />
            mainNavigation={true}
            {session && session.user && session.user.role === "admin" && (
              <TextButtonLink
                mainNavigation={true}
                href={"/datos/atendants"}
                name={"Datos"}
              />
            )}
            {session && session.user && session.user.role === "admin" && (
              <TextButtonLink
                mainNavigation={true}
                href={"/estadisticas"}
                name={"Estadisticas"}
              />
            )}
            {session &&
              session.user &&
              (session.user.role === "admin" ||
                session.user.role === "turnos") && (
                <TextButtonLink
                  mainNavigation={true}
                  href={"/turnos"}
                  name={"Turnos"}
                />
              )}
            {session &&
              session.user &&
              (session.user.role === "admin" ||
                session.user.role === "pagos") && (
                <TextButtonLink
                  mainNavigation={true}
                  href={"/pagos"}
                  name={"Pagos"}
                />
              )}
            {session &&
              session.user &&
              (session.user.role === "admin" ||
                session.user.role === "puerta") && (
                <TextButtonLink
                  mainNavigation={true}
                  href={"/puerta"}
                  name={"Puerta"}
                />
              )}
            {session && session.user && session.user.role === "admin" && (
              <TextButtonLink
                mainNavigation={true}
                href={"/admin"}
                name={"Admin"}
              />
            )}
            {!session && (
              <TextButtonLink
                mainNavigation={true}
                href="/api/auth/signin"
                name={"Sign In"}
              />
            )}
            {session && (
              <TextButtonLink
                mainNavigation={true}
                href="/api/auth/signout"
                name={"Sign Out"}
              />
            )}
          </div>
        </nav>
      </AppBar>
    </>
  );
}
