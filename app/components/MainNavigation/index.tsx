"use client";
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { Flex, Container } from '@chakra-ui/react'
import TextButtonLink from '../TextButtonLink';





export default function MainNavigation() {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/api/auth/signin?callbackUrl=/')
        }
    })


    return (
        <Flex justifyContent={'space-around'} background="blue.100"  padding={"20px"}>
            <TextButtonLink href={"/"} name={"Home"} />
            <TextButtonLink href={"/registro"} name={"Registro"} />
            {session && session.user && (session.user.role === "admin" || session.user.role === "turnos") && <TextButtonLink href={"/turnos"} name={"Turnos"} />}
            {session && session.user && (session.user.role === "admin" || session.user.role === "pagos") && <TextButtonLink href={"/pagos"} name={"Pagos"} />}
            {session && session.user && (session.user.role === "admin" || session.user.role === "puerta") && <TextButtonLink href={"/puerta"} name={"Puerta"} />}
            {session && session.user && session.user.role === "admin" && <TextButtonLink href={"/admin"} name={"Admin"} />}

            {!session && <TextButtonLink href="/api/auth/signin" name={"Sign In"} />}

            {session && <TextButtonLink href="/api/auth/signout" name={"Sign Out"} />}
        </Flex>
    )
}
