"use client";
import { Toolbar } from "@mui/material";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import TextButtonLink from "../TextButtonLink";
import { LinkInfo } from "@/utils/types/inputTypes";

export default function TabsComponent(props: { links: LinkInfo[] }) {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/");
    },
  });

  return (
    <>
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-around",
          background: "white",
          padding: "7px",
          marginTop: "70px",
          borderColor: "black",
        }}
      >
        {props.links &&
          props.links.map((link) => {
            return (
              <TextButtonLink
                mainNavigation={false}
                key={link.href}
                href={link.href}
                name={link.name}
              />
            );
          })}
      </Toolbar>
    </>
  );
}
