import { useLanguage } from '../i18n/LanguageContext'

function Footer() {
    const { t } = useLanguage()

    return (
        <footer className="border-t border-white/5 px-6 py-8">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-[#777080] sm:flex-row">
                <p>
                    © 2026 Valeria Zuluaga
                </p>

                <p>
                    {t.footer.builtWith}
                </p>
            </div>
        </footer>
    )
}

export default Footer