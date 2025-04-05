'use client'
import { Link } from '@/src/navigation'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import GithubIcon from '../../icons/github'
import Image from 'next/image' // Changed from LogoIcon
import LangSwitcher from './LangSwitcher'
import ThemeSwitch from './ThemeSwitch'

interface Props {
  locale: string
}

export const Header: FC<Props> = ({ locale }) => {
  const t = useTranslations('')
  return (
    <div className='mx-auto flex max-w-screen-2xl flex-row items-center justify-between p-5 bg-[#f9f8f5]'> {/* Added background */}
      <Link lang={locale} href='/'>
        <div className='flex flex-row items-center'>
          {/* Replaced LogoIcon with Image component */}
          <div className='mb-2 h-14 w-14 relative'>
            <Image
              src="/logo.png"
              alt="YFPN Logo"
              fill
              className="object-contain dark:invert-0"
            />
          </div>
          {/* Updated text color */}
          <strong className='mx-2 select-none text-[#0d294b] text-xl'>
            Youth Foreign Policy Network
          </strong>
        </div>
      </Link>
      <div className='flex flex-row items-center gap-3'>
        <nav className='mr-10 inline-flex gap-5 text-[#0d294b]'> {/* Text color */}
          <Link lang={locale} href={`/about`}>
            {t('About')}
          </Link>
          <a href=''>{t('Support')}</a>
          <a href=''>{t('Other')}</a>
        </nav>
        <ThemeSwitch />
        <LangSwitcher />
        <a
          href='https://github.com/yahyaparvar/nextjs-template'
          target='_blank'
        >
          <div className='size-8'>
            <GithubIcon className="text-[#0d294b]" /> {/* Color update */}
          </div>
        </a>
      </div>
    </div>
  )
}
