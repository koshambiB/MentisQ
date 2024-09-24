"use client";
import React from 'react'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '../utils/supabase/client';

const LoginButton = () => {
    const router = useRouter();
    const supabase = createClient();
    const handleLogin = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
          provider: 'google',
          
        });
        if (error) {
            console.error('Login error:', error.message);
         } 
         
    };
    useEffect(() => {
        const fetchUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                router.push('/dashboard'); 
            }
        };
        fetchUser();
    }, [router, supabase]);
    return (
        <div>
        <button
        onClick={handleLogin}
        className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded transition duration-300" >
        Login with Google
        </button>
        </div>
    )
}

export default LoginButton;