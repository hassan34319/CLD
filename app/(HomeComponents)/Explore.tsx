import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { SocialPost } from '../types'
import { cy } from '../utils/Cy'
import { urlFor } from '../utils/UrlImage'

type Props = {
    socialPosts : SocialPost[]
}

function Explore({socialPosts}: Props) {
  return (
    <section className="flex flex-col items-center mt-6 md:mt-12 lg:mt-20 mb-6 md:mb-12 lg:mb-20">
      <div
        className={`${cy.className} text-tiffany text-lg  md:text-4xl lg:text-6xl`}
      >
        EXPLORE MORE
      </div>
      {/* POSTS */}
       <div className="flex flex-wrap w-full mt-6 md:mt-12 lg:mt-20">
        {socialPosts.map((Post) => {
          return (
            <Link className="w-[20%] h-[5.5rem] md:h-40 relative lg:h-[16rem]" href={Post.link}>
              <Image
                className="object-cover"
                src={urlFor(Post.image).url()}
                fill
                alt="Partner 1"
              />
            </Link>
          );
        })}
      </div>
    </section>
  )
}

export default Explore