"use client";
import Link from "next/link";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function TextButtonLink(props: {
  href: string;
  name: string;
  mainNavigation: boolean;
}) {
  const activePathName = usePathname();

  function isMarked(
    mainNavigation: boolean,
    href: string,
    activePathName: string
  ) {
    if (mainNavigation) {
      console.log("activePathName", activePathName);
      console.log("href", href);
      if (activePathName == "/" && href == "/") {
        return true;
      }
      if (
        activePathName
          .split("/")
          .filter((element) => element != "")
          .includes(href.split("/")[1])
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      if (href === activePathName) {
        return true;
      } else {
        return false;
      }
    }
  }

  return (
    <Button
      className="hover:text-black flex items-center relative transition text-black"
      key={props.href}
    >
      <Link href={props.href}>{props.name}</Link>
      {isMarked(props.mainNavigation, props.href, activePathName) && (
        <motion.div
          layoutId={
            props.mainNavigation
              ? "header-active-link"
              : "secondary-header-active-link"
          }
          className="bg-accent h-1 w-full absolute bottom-0"
        ></motion.div>
      )}
    </Button>
  );
}
