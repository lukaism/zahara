"use client";
import Link from 'next/link'
import { Button, Tooltip } from '@mui/material';


export default function IconButtonLink(props: {
    href: string,
    label: string,
    icon: any
}) {



    return (
        <Button  key={props.href}>
            <Link style={{ textDecoration: "none" }} href={props.href}>
                <Tooltip title={props.label}>
                    <span>
                        :D
                    </span>
                </Tooltip></Link>
        </Button>

    )
}
