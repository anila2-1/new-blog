'use client'
// import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
// import { Media } from '@/components/Media'
// import RichText from '@/components/RichText'

export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  return (
    <div className="relative -mt-[8.4rem] flex items-center justify-center text-black">
      <div className="container mb-8 z-10 relative flex items-center justify-center">
        <div className="max-w-[36.5rem] mt-20 m-auto text-xs sm:text-base md:text-center">
          {/* {richText && <RichText className="mb-6 " data={richText} enableGutter={false} />} */}
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex md:justify-center gap-4">
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink {...link} />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
      {/* <div className="min-h-[40vh] select-none">
        {media && typeof media === 'object' && (
          <Media fill imgClassName="-z-5 object-cover" priority resource={media} />
        )}
      </div> */}
    </div>
  )
}
