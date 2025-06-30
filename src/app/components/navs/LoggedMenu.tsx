'use client';

import React, { FC } from 'react';

interface LoggedMenuProps {
  isOpen: boolean;
  onNavigate: (path: string) => void;
}

const LoggedMenu: FC<LoggedMenuProps> = ({ isOpen, onNavigate }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-[96px] right-0 w-full h-[calc(100vh-96px)] bg-zinc-800 text-white z-40 flex flex-col justify-start px-10 pt-10 font-['Oswald'] sm:max-w-sm">
      <div className="flex flex-col mx-auto text-center">
      <p
          className="mb-4 cursor-pointer px-4 py-2 font-bold bg-white hover:bg-gray-300 
          text-zinc-800 rounded-sm text-xl"
          onClick={() => onNavigate('/logged/notifications')}
        >
          Notifications
        </p>
        <p
          className="mb-4 cursor-pointer px-4 py-2 font-bold bg-white hover:bg-gray-300 
          text-zinc-800 rounded-sm text-xl"
          onClick={() => onNavigate('/logged/messages')}
        >
          Messages
        </p>
        <p
          className="mb-4 cursor-pointer px-4 py-2 font-bold bg-white hover:bg-gray-300 
          text-zinc-800 rounded-sm text-xl"
          onClick={() => onNavigate('/logged/profile')}
        >
          My Profile
        </p>

        <p
          className="mb-4 cursor-pointer px-4 py-2 font-bold bg-white hover:bg-gray-300 
          text-zinc-800 rounded-sm text-xl"
          onClick={() => onNavigate('/logged/subscriptions')}
        >
          My Subscriptions
        </p>

        <p
          className="mb-4 cursor-pointer px-4 py-2 font-bold bg-white hover:bg-gray-300 
          text-zinc-800 rounded-sm text-xl"
          onClick={() => onNavigate('/logged/settings')}
        >
          Settings
        </p>

        <p
          className="mt-8 cursor-pointer px-4 py-2 font-bold bg-white hover:bg-red-300 
          text-red-700 rounded-sm text-xl"
          onClick={() => onNavigate('/logout')}
        >
          Log Out
        </p>
      </div>
    </div>
  );
};

export default LoggedMenu;
