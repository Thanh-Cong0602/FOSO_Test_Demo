import React from 'react'
import SocialIcon from './social-icon';
import { SOCIAL_CONFIGS } from '@/constants/social-config';

const SocialGroup = () => {
  return (
    <>
      <p className="pb-2 pt-3 text-base font-extrabold leading-1.5 text-gray-300">Chia sẻ</p>
      <div className="grid gap-2.5">
      {SOCIAL_CONFIGS.map((item, index)=> 
      (
        <SocialIcon key={index} href={item.href} icon={item.icon} />
      ))}
      </div>
    </>
  );
}

export default SocialGroup;
