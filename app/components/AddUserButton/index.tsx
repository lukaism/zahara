"use client";
import { newUser } from '@/utils/actions'
import Link from 'next/link'
import { Button, Text, Tooltip } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'


export default function AddUserButton() {



    return (
        <div>
            <form action={newUser}>
                <input type="text" name="name" className="border border-black" />
                <input type="text" name="role" className="border border-black" />
                <input type="text" name="email" className="border border-black" />
                <input type="text" name="password" className="border border-black" />
                <button type="submit">create</button>
            </form>
        </div>

    )
}