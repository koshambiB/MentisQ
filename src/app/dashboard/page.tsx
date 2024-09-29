"use client";
import { createClient } from '@/src/utils/supabase/client';
import { strict } from 'assert';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { User } from '@supabase/supabase-js'; 

const page = () => {
    const [user, setUser] = useState<User | null>(null);
    const supabase = createClient();
    const router = useRouter();
     useEffect(()=>{
        const checkUser = async () => {
        const { data,error} = await supabase.auth.getUser();
        if (error) {
            console.error('Error fetching user:', error.message);
          } else if (!data.user) {
            router.push('/'); 
          } else {
            setUser(data.user);
            if (data.user.email) {
                insertUserEmail(data.user.email); 
              } else {
                console.error('User email is undefined');
              }
          }
        };
        checkUser();
     },[router, supabase]);

     const insertUserEmail = async (email: string) => {
        const { data, error } = await supabase
          .from('users') 
          .upsert([{ email: email }]);
    
        if (error) {
          console.error('Error inserting user email:', error.message);
        } else {
          console.log('User email inserted successfully:', data);
        }
      };
    return (
    <div>page
        <h1>Welcome to the Dashboard</h1>
        {user ? <p>Hello, {user.email}</p> :<p>Loading user data...</p>}
    </div> 
  )
}

export default page;