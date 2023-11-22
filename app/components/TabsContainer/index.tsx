'use client'
import { Toolbar } from '@mui/material';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react'
import TextButtonLink from '../TextButtonLink';







export default function TabsContainer() {

    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/api/auth/signin?callbackUrl=/')
        }
    })

    return (
        <>
            <Toolbar style={{ display: 'flex', justifyContent: "space-around", background: "white", padding: "7px", marginTop: "70px", borderColor:"black" }} >
                {session && session.user && session.user.role === "admin" && <TextButtonLink href={"/datos/atendants"} name={"Gestion de Asistentes"} />}
                {session && session.user && session.user.role === "admin" && <TextButtonLink href={"/datos/meals"} name={"Comensales"} />}
            </Toolbar>
        </>
    )
}
