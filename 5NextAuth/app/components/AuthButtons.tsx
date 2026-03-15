'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export default function AuthButtons() {
  const { data: session } = useSession();

  if (session) {
    return (
        <div className="flex items-center py-4 px-2 justify-center">
        <Link href="/profile">Profil</Link>
        <div className="flex gap-4 ml-auto">
            <span className='self-center'>{session.user?.email}</span>
            <button onClick={() => signOut()} className="border-2 rounded-md border-white hover:scale-115 transition-transform p-1 shadow-white shadow-md h-10 self-center">Wyloguj</button>
            {session.user?.image && (
                <img
                src={session.user.image}
                alt="Avatar"
                style={{ borderRadius: '50%', width: '100px', height: '100px' }}
                />
            )}
            </div>
        </div>
    );
  }

  return <button onClick={() => signIn()}>Zaloguj przez GitHub</button>;
}