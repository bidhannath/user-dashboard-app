import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation';
import React from 'react'
import ProfileHeader from './ProfileHeader';

import { nextAuthOptions } from '@/config/auth';
import Profile from './Profile';

async function getProfileData(accessToken: string | null | undefined) {
  const res: any = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/user/profile`, {
    method: 'GET',
    headers: { 
      "Content-Type": "application/json",
      "Authorization": `Bearer ${accessToken}`
    }
  })
  // console.log(res);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    if(res.status === 403) {
      redirect('/auth/signin');
    }
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return await res.json()
}

const ProfilePage = async () => {
  const session = await getServerSession(nextAuthOptions);
  if(!session || !session.user) {
    redirect('/auth/signin');
  }
  const profile = await getProfileData(session.accessToken);
  return (
    <div className="h-screen w-full">
        <div className="mt-14 shadow bg-white h-screen">
          <ProfileHeader {...profile} />
          <Profile {...profile} />
        </div>
    </div>
)
}

export default ProfilePage