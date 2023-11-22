"use client";
import { Container } from '@mui/material';
import IconButtonLink from '../IconButtonLink';
import { FcStatistics } from 'react-icons/fc'
import { BsCalendarEventFill } from 'react-icons/bs'


type VerticalMenuElement = {
    href: string,
    label: string,
    icon: string
}


export default function HorizontalNavigatorDatos() {
    const links = [
        { href: '/admin/statistics', label: 'Statistics', icon: FcStatistics },
        { href: '/admin/events', label: 'Events', icon: BsCalendarEventFill },
    ]




    return (
        <Container style={{ display: 'flex', justifyContent: "space-around", background: "green", padding: "20px" }} >
            {links.map(element => {

                return (
                    <IconButtonLink key={element.label} href={element.href} label={element.label} icon={element.icon} />
                )
            })}

        </Container>
    )
}
