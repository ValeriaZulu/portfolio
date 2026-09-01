import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

function Navbar() {
    const { language, setLanguage, t } = useLanguage()
    return (
        <header className="fixed top-0 left-0 z-50 w-full border-b border-white/5 bg-[#0b0910]/80 backdrop-blur-md">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

                <Link
                    to="/"
                    className="text-lg font-semibold tracking-wide text-[#f5f1fa]"
                >
                    Valeria Zuluaga Alzate<span className="text-[#a970ff]">.</span>
                </Link>

                <div className="flex items-center gap-8">
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
                </div>
            </nav>
        </header>
    )
}

export default Navbar