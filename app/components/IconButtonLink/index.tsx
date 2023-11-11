"use client";
import Link from 'next/link'
import { Button, Text, Tooltip } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'


export default function IconButtonLink(props: {
    href: string,
    label: string,
    icon: any
}) {



    return (
        <Button colorScheme='blue' key={props.href}>
            <Link style={{ textDecoration: "none" }} href={props.href}>
                <Tooltip label={props.label}>
                    <span>
                        <Icon as={props.icon} />
                    </span>
                </Tooltip></Link>
        </Button>

    )
}
