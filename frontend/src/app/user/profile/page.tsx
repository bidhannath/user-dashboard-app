// 'use client';
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation';
import { nextAuthOptions } from '@/config/auth';
import Banner from '@/components/profile/Banner';
import General from '@/components/profile/General';
import Notification from '@/components/profile/Notification';
import Project from '@/components/profile/Project';
import Storage from '@/components/profile/Storage';
import Upload from '@/components/profile/Upload';

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

const ProfileOverview = async () => {
  const session = await getServerSession(nextAuthOptions);
  if(!session || !session.user) {
    return (
      <>hello</>
    );
  } else {
    const profile = await getProfileData(session.accessToken);
    return (
      <div className="flex w-full flex-col gap-5 lg:gap-5">
        <div className="w-ful mt-3 flex h-fit flex-col gap-5 lg:grid lg:grid-cols-12">
          <div className="col-span-4 lg:!mb-0">
            <Banner />
          </div>

          <div className="col-span-3 lg:!mb-0">
            <Storage />
          </div>

          <div className="z-0 col-span-5 lg:!mb-0">
            <Upload />
          </div>
        </div>
        {/* all project & ... */}

        <div className="mb-4 grid h-full grid-cols-1 gap-5 lg:!grid-cols-12">
          <div className="col-span-5 lg:col-span-6 lg:mb-0 3xl:col-span-4">
            <Project />
          </div>
          <div className="col-span-5 lg:col-span-6 lg:mb-0 3xl:col-span-5">
            <General />
          </div>

          <div className="col-span-5 lg:col-span-12 lg:mb-0 3xl:!col-span-3">
            <Notification />
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      Loading...
    </>
  )
};

export default ProfileOverview;
