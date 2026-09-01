import { useLanguage } from '../i18n/LanguageContext'

function Hero() {
    const { t } = useLanguage()

    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden px-6 pt-5"
        >
            {/* Decorative glow */}
            <div
                className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#8b5cf6]/20 blur-3xl"
                aria-hidden="true"
            />

            <div
                className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#a970ff]/10 blur-3xl"
                aria-hidden="true"
            />

            <div className="relative mx-auto w-full max-w-6xl">
                <div className="max-w-3xl">
                    <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-[#a970ff]">
                        {t.hero.role}
                    </p>

                    <h1 className="text-5xl font-bold leading-tight tracking-tight text-[#f5f1fa] sm:text-6xl md:text-7xl">
                        {t.hero.greeting}{' '}
                        <span className="text-[#c99cff]">
                            Valeria Zuluaga.
                        </span>
                    </h1>

                    <p className="mt-8 max-w-2xl text-lg leading-8 text-[#aaa2b5] sm:text-xl">
                        {t.hero.description}
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <a
                            href="/projects"
                            className="rounded-full bg-[#a970ff] px-6 py-3 font-medium text-[#0b0910] transition-all duration-300 hover:bg-[#c99cff] hover:shadow-[0_0_30px_rgba(169,112,255,0.35)]"
                        >
                            {t.hero.projectsButton}
                        </a>

                        <a
                            href="https://github.com/ValeriaZulu"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full border border-[#a970ff]/40 px-6 py-3 font-medium text-[#e7d7ff] transition-all duration-300 hover:border-[#c99cff] hover:bg-[#a970ff]/10"
                        >
                            {t.projects.github}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero