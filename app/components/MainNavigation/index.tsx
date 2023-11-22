"use client";
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { Container, AppBar, Toolbar } from '@mui/material';
import TextButtonLink from '../TextButtonLink';





export default function MainNavigation() {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/api/auth/signin?callbackUrl=/')
        }
    })


    return (
        <>
            <AppBar>
                <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <TextButtonLink href={"/"} name={"Home"} />
                        {/*             <TextButtonLink href={"/registro"} name={"Registro"} />*/}
                        {session && session.user && session.user.role === "admin" && <TextButtonLink href={"/datos/users"} name={"Datos"} />}
                        {session && session.user && session.user.role === "admin" && <TextButtonLink href={"/estadisticas"} name={"Estadisticas"} />}
                        {session && session.user && (session.user.role === "admin" || session.user.role === "turnos") && <TextButtonLink href={"/turnos"} name={"Turnos"} />}
                        {session && session.user && (session.user.role === "admin" || session.user.role === "pagos") && <TextButtonLink href={"/pagos"} name={"Pagos"} />}
                        {session && session.user && (session.user.role === "admin" || session.user.role === "puerta") && <TextButtonLink href={"/puerta"} name={"Puerta"} />}
                        {session && session.user && session.user.role === "admin" && <TextButtonLink href={"/admin"} name={"Admin"} />}

                        {!session && <TextButtonLink href="/api/auth/signin" name={"Sign In"} />}

                        {session && <TextButtonLink href="/api/auth/signout" name={"Sign Out"} />}
                        </div>
                </nav>
            </AppBar>
        </>
    )
}
