'use client'
import Image from 'next/image'
import React from 'react'
import AlternatingList from '../alternating-list'
import LottieAnimation from '../animations/LottieAnimation'
import Button from '../button'
import Link from 'next/link'

const LogoAnimation = () => <div className='flex items-center justify-center w-full'>
    <LottieAnimation
        importAnimation={(cb) =>
            import('@/lib/lotties/JB2G.json').then(cb)
        }
        lottieProps={{
            style: {
                height: 290,
            },
            autoplay: true,
        }}
    />
</div>

const AiTalks = () => {
    return (
        <div className="flex justify-center w-full mt-10 overflow-hidden">
            {/* <div className="relative min-w-[274px] h-[290px]">
                <Image
                    src="/icons/hexagon.svg"
                    fill
                    alt="Logo"
                />
            </div> */}
            <div>
                <LogoAnimation />
            </div>
            <div className="z-10 absolute">
                <AlternatingList items={[
                    'WA businesses feel confident about future growth',
                    'AI cant replace creativity',
                    'Sales measure true success',
                    'Human connection drives WA business',
                    `The primary barrier to digital\ntransformation is financial investment`
                ]} classNames="text-sm text-secondary whitespace-pre" />
            </div>
            <div className='fixed bottom-3 w-full p-4'>
                <Link href="/overview">
                    <Button
                        variant="primary"
                    >
                        Get a reality check
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default AiTalks