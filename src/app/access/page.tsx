"use client"
import React, { FC, useState } from 'react';
import LoginForm from './accessComponents/LoginForm';
import SignupForm from './accessComponents/SignupForm';
import { useRouter } from 'next/navigation';
interface AccessProps {
}

const Access: FC<AccessProps> = ({ }) => {
    const router = useRouter();
    const [section, setSection] = useState("login")
    const handleRedirection = (params: string) => {
        router.push(params);
    }

    return (
        <div className="flex flex-col min-h-screen bg-white text-gray-500 p-12"  >
            <div className='flex flex-row'>
                <div className='flex flex-col'>
                    <p className='text-5xl font-bold'>Access</p>
                    <p> Configure your prefferences to see only information that is relevant to you</p>
                    <p> Create a profile to connect with other users and companies</p>
                    <p>Manage your profile, suscriptions and preferences</p>
                </div>
                <div className='flex flex-col'>

                    <p>Create an account or log in to start!</p>
                    <div className='flex flex-row gap-4'>
                        <button className='px-2 py-1 rounded bg-gray-700 cursor-pointer' onClick={() => { setSection("login") }}>Log in</button>
                        <button className='px-2 py-1 rounded bg-gray-700 cursor-pointer' onClick={() => { setSection("signup") }}>Sign Up</button>
                    </div>
                    <div className='p-12'>

                        {section === "login" ?
                            <>
                                <LoginForm />
                            </> : <>
                                <SignupForm />
                            </>}
                    </div>
                </div>
            </div>

            <p>Do you want to know more about us?</p>
            <button className='px-2 py-1 rounded bg-gray-700' onClick={() => { handleRedirection("/about") }}>About us</button>

        </div>
    );
};

export default Access;