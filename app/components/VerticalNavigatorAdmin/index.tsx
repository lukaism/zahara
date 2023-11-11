"use client";
import { Flex } from '@chakra-ui/react'
import IconButtonLink from '../IconButtonLink';
import { FcStatistics } from 'react-icons/fc'
import { FaUserAlt } from 'react-icons/fa'
import { BsCalendarEventFill } from 'react-icons/bs'

type VerticalMenuElement = {
    href: string,
    label: string,
    icon: string
}


export default function VerticalNavigatorAdmin() {
    const links = [
        { href: '/admin/users', label: 'User Management', icon: FaUserAlt },
        { href: '/admin/statistics', label: 'Statistics', icon: FcStatistics },
        { href: '/admin/events', label: 'Events', icon: BsCalendarEventFill },
    ]




    return (
        <Flex justifyContent={'space-around'} background="blue.100" padding={"20px"} direction={'column'} height={"100vh"}>
            {links.map(element => {

                return (
                    <IconButtonLink href={element.href} label={element.label} icon={element.icon} />
                )
            })}

        </Flex>
    )
}
