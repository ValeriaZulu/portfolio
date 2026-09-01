import { useLanguage } from '../i18n/LanguageContext'

function Education() {
    const { t } = useLanguage()

    return (
        <section
            id="education"
            className="relative px-6 py-18 sm:py-18"
        >
            <div className="mx-auto max-w-6xl">
                {/* Section heading */}
                <div className="mb-12">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#a970ff]">
                        {t.education.label}
                    </p>

                    <h2 className="text-3xl font-bold tracking-tight text-[#f5f1fa] sm:text-4xl">
                        {t.education.title}
                    </h2>
                </div>

                {/* Education card */}
                <div className="grid gap-8 md:grid-cols-[1.4fr_0.8fr] md:items-center">

                    {/* Main information */}
                    <div className="rounded-2xl border border-white/5 bg-[#15111c] p-7 sm:p-8">
                        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                                <p className="text-sm font-medium text-[#a970ff]">
                                    Universidad Pontificia Bolivariana
                                </p>

                                <h3 className="mt-2 text-2xl font-semibold text-[#f5f1fa]">
                                    {t.education.degree}
                                </h3>

                                <p className="mt-2 text-sm text-[#aaa2b5]">
                                    {t.education.location}
                                </p>
                            </div>

                            <span className="w-fit rounded-full border border-[#a970ff]/20 bg-[#a970ff]/5 px-3 py-1 text-xs text-[#c99cff]">
                                {t.education.level}
                            </span>
                        </div>

                        <div className="mt-8 border-t border-white/5 pt-6">
                            <p className="text-sm leading-7 text-[#aaa2b5] sm:text-base">
                                {t.education.description}
                            </p>
                        </div>
                    </div>

                    {/* Focus areas */}
                    <div className="space-y-4">
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#aaa2b5]">
                            {t.education.focus}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {t.education.areas.map((area) => (
                                <span
                                    key={area}
                                    className="rounded-full border border-white/5 bg-[#15111c] px-4 py-2 text-sm text-[#c9c0d1] transition-colors duration-300 hover:border-[#a970ff]/30 hover:text-[#c99cff]"
                                >
                                    {area}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education