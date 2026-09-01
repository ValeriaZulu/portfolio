function Navbar() {
    return (
        <header className="fixed top-0 left-0 z-50 w-full border-b border-white/5 bg-[#0b0910]/80 backdrop-blur-md">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

                <a
                    href="#home"
                    className="text-lg font-semibold tracking-wide text-[#f5f1fa]"
                >
                    Valeria Zuluaga Alzate<span className="text-[#a970ff]">.</span>
                </a>

                <div className="hidden items-center gap-8 text-sm text-[#aaa2b5] md:flex">
                    <a
                        href="#about"
                        className="transition-colors duration-300 hover:text-[#c99cff]"
                    >
                        About
                    </a>

                    <a
                        href="#projects"
                        className="transition-colors duration-300 hover:text-[#c99cff]"
                    >
                        Projects
                    </a>

                    <a
                        href="#education"
                        className="transition-colors duration-300 hover:text-[#c99cff]"
                    >
                        Education
                    </a>

                    <a
                        href="#contact"
                        className="transition-colors duration-300 hover:text-[#c99cff]"
                    >
                        Contact
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar