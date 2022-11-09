import Image from 'next/image';
import React, { MouseEventHandler } from 'react';

const Icon = React.forwardRef(({name, handle = '', icon, className = '', size =30,  onClick, href } : {name:string, handle?: string, icon: string, link?: string , className?: string, size?: number, onClick?: MouseEventHandler, href?:string}, ref : React.LegacyRef<HTMLAnchorElement>) => {
  return (
    <a className={`no-underline text-current h-fit w-fit inline-flex
      ${className}`} href={href} onClick={onClick} ref={ref} target={href? '_blank': ''} rel={href? 'noopener noreferrer': ''} title={`${name} ${handle}`}>
      <div className ='flex flex-row items-center justify-start'>
          <Image src={icon} height={size} width={size}/>
      </div>
    </a>
  )
});

export default Icon;