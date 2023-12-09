import Link from "next/link";
import "../../globals.css";
import { Inter } from "next/font/google";
import TabsComponent from "../../components/TabsComponent";
import { LinkInfo } from "@/utils/types/inputTypes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function DatosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const links: LinkInfo[] = [
    {
      href: "/datos/atendants",
      name: "Gestion de Asistentes",
    },
    {
      href: "/datos/meals",
      name: "Comensales",
    },
  ];

  return (
    <>
      <div>
        <nav>
          <TabsComponent links={links} />
        </nav>
        {children}
      </div>
    </>
  );
}
