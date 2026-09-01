import { useLanguage } from '../i18n/LanguageContext'

function About() {
    const { t } = useLanguage()

    const areasList = [
        { id: '01', ...t.about.areas.software },
        { id: '02', ...t.about.areas.mobile },
        { id: '03', ...t.about.areas.data },
        { id: '04', ...t.about.areas.architecture },
    ]

    return (
        <section
            id="about"
            className="relative px-6 py-18 sm:py-18"
        >
            <div className="mx-auto max-w-6xl">
                {/* Section heading */}
                <div className="mb-12">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#a970ff]">
                        {t.about.label}
                    </p>

                    <h2 className="text-3xl font-bold tracking-tight text-[#f5f1fa] sm:text-4xl">
                        {t.about.title}
                    </h2>
                </div>

                {/* Content */}
                <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-start">
                    {/* Paragraphs mapped dynamically */}
                    <div className="space-y-6 text-base leading-8 text-[#aaa2b5] sm:text-lg">
                        {t.about.paragraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>

                    {/* Areas of interest mapped dynamically */}
                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
                        {areasList.map((area) => (
                            <div
                                key={area.id}
                                className="rounded-2xl border border-white/5 bg-[#15111c] p-5 transition-all duration-300 hover:border-[#a970ff]/30 hover:bg-[#1b1524]"
                            >
                                <p className="mb-2 text-sm text-[#a970ff]">{area.id}</p>
                                <h3 className="font-semibold text-[#f5f1fa]">
                                    {area.title}
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-[#aaa2b5]">
                                    {area.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About