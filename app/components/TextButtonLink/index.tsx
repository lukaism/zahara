"use client";
import Link from 'next/link'
import { Button, Text } from '@chakra-ui/react'


export default function TextButtonLink(props: {
    href: string,
    name: string
}) {



    return (
        <Button colorScheme='blue' key={props.href}>
            <Link style={{ textDecoration: "none" }} href={props.href}><Text fontSize='3xl'>{props.name}</Text></Link>
        </Button>

    )
}
