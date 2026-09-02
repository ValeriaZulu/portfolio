import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useLanguage } from '../i18n/LanguageContext'

function Navbar() {
    const { language, setLanguage, t } = useLanguage()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <header className="fixed top-0 left-0 z-50 w-full border-b border-white/5 bg-[#0b0910]/80 backdrop-blur-md">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

                {/* Logo / Name */}
                <Link
                    to="/"
                    onClick={closeMenu}
                    className="text-lg font-semibold tracking-wide text-[#f5f1fa]"
                >
                    Valeria Zuluaga Alzate
                    <span className="text-[#a970ff]">.</span>
                </Link>

                <div className="flex items-center gap-6">

                    {/* Desktop navigation */}
                    <div className="hidden items-center gap-8 text-sm text-[#aaa2b5] md:flex">
                        <Link
                            to="/#about"
                            className="transition-colors duration-300 hover:text-[#c99cff]"
                        >
                            {t.nav.about}
                        </Link>

                        <Link
                            to="/projects"
                            className="transition-colors duration-300 hover:text-[#c99cff]"
                        >
                            {t.nav.projects}
                        </Link>

                        <Link
                            to="/#education"
                            className="transition-colors duration-300 hover:text-[#c99cff]"
                        >
                            {t.nav.education}
                        </Link>

                        <Link
                            to="/#contact"
                            className="transition-colors duration-300 hover:text-[#c99cff]"
                        >
                            {t.nav.contact}
                        </Link>
                    </div>

                    {/* Language switcher */}
                    <div className="flex items-center gap-1 text-xs font-medium">
                        <button
                            onClick={() => setLanguage('en')}
                            className={`transition-colors duration-300 ${language === 'en'
                                    ? 'text-[#c99cff]'
                                    : 'text-[#777080] hover:text-[#aaa2b5]'
                                }`}
                        >
                            EN
                        </button>

                        <span className="text-[#777080]">|</span>

                        <button
                            onClick={() => setLanguage('es')}
                            className={`transition-colors duration-300 ${language === 'es'
                                    ? 'text-[#c99cff]'
                                    : 'text-[#777080] hover:text-[#aaa2b5]'
                                }`}
                        >
                            ES
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-[#aaa2b5] transition-colors duration-300 hover:text-[#c99cff] md:hidden"
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMenuOpen}
                    >
                        <span className="text-xl">
                            {isMenuOpen ? '✕' : '☰'}
                        </span>
                    </button>
                </div>
            </nav>

            {/* Mobile navigation */}
            <div
                className={`overflow-hidden border-t border-white/5 transition-all duration-300 md:hidden ${isMenuOpen
                        ? 'max-h-64 opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="flex flex-col px-6 py-4 text-sm text-[#aaa2b5]">

                    <Link
                        to="/#about"
                        onClick={closeMenu}
                        className="border-b border-white/5 py-4 transition-colors duration-300 hover:text-[#c99cff]"
                    >
                        {t.nav.about}
                    </Link>

                    <Link
                        to="/projects"
                        onClick={closeMenu}
                        className="border-b border-white/5 py-4 transition-colors duration-300 hover:text-[#c99cff]"
                    >
                        {t.nav.projects}
                    </Link>

                    <Link
                        to="/#education"
                        onClick={closeMenu}
                        className="border-b border-white/5 py-4 transition-colors duration-300 hover:text-[#c99cff]"
                    >
                        {t.nav.education}
                    </Link>

                    <Link
                        to="/#contact"
                        onClick={closeMenu}
                        className="py-4 transition-colors duration-300 hover:text-[#c99cff]"
                    >
                        {t.nav.contact}
                    </Link>

                </div>
            </div>
        </header>
    )
}

export default Navbar