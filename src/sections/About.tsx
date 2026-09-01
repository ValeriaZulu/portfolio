function About() {
    return (
        <section
            id="about"
            className="relative px-6 py-18 sm:py-18"
        >
            <div className="mx-auto max-w-6xl">
                {/* Section heading */}
                <div className="mb-12">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#a970ff]">
                        About me
                    </p>

                    <h2 className="text-3xl font-bold tracking-tight text-[#f5f1fa] sm:text-4xl">
                        A little bit about me
                    </h2>
                </div>

                {/* Content */}
                <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-start">
                    <div className="space-y-6 text-base leading-8 text-[#aaa2b5] sm:text-lg">
                        <p>
                            I'm currently studying Systems Engineering at Universidad
                            Pontificia Bolivariana, where I've had the opportunity to explore
                            different areas of software and technology.
                        </p>

                        <p>
                            Throughout my degree, I've worked on projects involving web and
                            mobile development, databases, data analysis, and software
                            architecture.
                        </p>

                        <p>
                            I enjoy learning by building, experimenting with new
                            technologies, and turning what I learn into practical projects.
                        </p>
                    </div>

                    {/* Areas of interest */}
                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
                        <div className="rounded-2xl border border-white/5 bg-[#15111c] p-5 transition-all duration-300 hover:border-[#a970ff]/30 hover:bg-[#1b1524]">
                            <p className="mb-2 text-sm text-[#a970ff]">01</p>
                            <h3 className="font-semibold text-[#f5f1fa]">
                                Software Development
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-[#aaa2b5]">
                                Building applications and learning through hands-on projects.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/5 bg-[#15111c] p-5 transition-all duration-300 hover:border-[#a970ff]/30 hover:bg-[#1b1524]">
                            <p className="mb-2 text-sm text-[#a970ff]">02</p>
                            <h3 className="font-semibold text-[#f5f1fa]">
                                Mobile Development
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-[#aaa2b5]">
                                Exploring mobile applications through React Native and Kotlin.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/5 bg-[#15111c] p-5 transition-all duration-300 hover:border-[#a970ff]/30 hover:bg-[#1b1524]">
                            <p className="mb-2 text-sm text-[#a970ff]">03</p>
                            <h3 className="font-semibold text-[#f5f1fa]">
                                Data & Analytics
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-[#aaa2b5]">
                                Working with data, databases, and introductory machine
                                learning.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/5 bg-[#15111c] p-5 transition-all duration-300 hover:border-[#a970ff]/30 hover:bg-[#1b1524]">
                            <p className="mb-2 text-sm text-[#a970ff]">04</p>
                            <h3 className="font-semibold text-[#f5f1fa]">
                                Software Architecture
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-[#aaa2b5]">
                                Exploring architectural patterns and Domain-Driven Design.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About