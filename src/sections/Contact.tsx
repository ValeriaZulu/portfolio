import { useLanguage } from '../i18n/LanguageContext'

function Contact() {
    const { t } = useLanguage()

    return (
        <section
            id="contact"
            className="relative px-6 py-18 sm:py-18"
        >
            <div className="mx-auto max-w-4xl text-center">
                {/* Section heading */}
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#a970ff]">
                    {t.contact.label}
                </p>

                <h2 className="text-3xl font-bold tracking-tight text-[#f5f1fa] sm:text-4xl">
                    {t.contact.title}
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#aaa2b5] sm:text-lg">
                    {t.contact.description}
                </p>

                {/* Links */}
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <a
                        href="https://github.com/ValeriaZulu"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-[#a970ff]/30 px-6 py-3 text-sm font-medium text-[#e7d7ff] transition-all duration-300 hover:border-[#a970ff] hover:bg-[#a970ff]/10 hover:text-[#c99cff]"
                    >
                        {t.projects.github}
                    </a>

                    <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-[#a970ff]/30 px-6 py-3 text-sm font-medium text-[#e7d7ff] transition-all duration-300 hover:border-[#a970ff] hover:bg-[#a970ff]/10 hover:text-[#c99cff]"
                    >
                        {t.contact.linkedin}
                    </a>

                    <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-[#a970ff]/30 px-6 py-3 text-sm font-medium text-[#e7d7ff] transition-all duration-300 hover:border-[#a970ff] hover:bg-[#a970ff]/10 hover:text-[#c99cff]"
                    >
                        {t.contact.cv}
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact