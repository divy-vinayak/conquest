import React from 'react'

export default function SideBar() {
  return (
    
      <div className="flex flex-col items-center pt-8 mx-auto w-full text-2xl font-bold leading-6 text-white bg-black max-w-[480px]">
        <div className="text-teal-400">ConQuest</div>
        <div className="justify-center items-start self-stretch px-16 py-4 mt-24 w-full whitespace-nowrap bg-teal-400">
          Dashboard
        </div>
        <div className="mt-8">Profile</div>
        <div className="mt-12">Explore Quests</div>
        <div className="mt-11">About</div>
        <div className="flex gap-5 justify-between self-stretch px-7 py-2.5 whitespace-nowrap bg-gray-800 mt-[656px]">
          <img
            loading="lazy"
            srcSet="..."
            className="w-10 aspect-square"
          />
          <div className="grow my-auto">Alex Kent</div>
        </div>
      </div>
    
  );
}
