import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <header className="fixed top-0 left-0 z-50 w-full border-b border-white/5 bg-[#0b0910]/80 backdrop-blur-md">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

                <Link
                    to="/"
                    className="text-lg font-semibold tracking-wide text-[#f5f1fa]"
                >
                    Valeria Zuluaga Alzate<span className="text-[#a970ff]">.</span>
                </Link>

                <div className="hidden items-center gap-8 text-sm text-[#aaa2b5] md:flex">
                    <Link
                        to="/#about"
                        className="transition-colors duration-300 hover:text-[#c99cff]"
                    >
                        About
                    </Link>

                    <Link
                        to="/#projects"
                        className="transition-colors duration-300 hover:text-[#c99cff]"
                    >
                        Projects
                    </Link>

                    <Link
                        to="/#education"
                        className="transition-colors duration-300 hover:text-[#c99cff]"
                    >
                        Education
                    </Link>

                    <Link
                        to="/#contact"
                        className="transition-colors duration-300 hover:text-[#c99cff]"
                    >
                        Contact
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar