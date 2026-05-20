"use client"

type TFunction = (key: string) => string

export type AboutStoryProps = {
  t: TFunction
  isLoaded: boolean
}

export function AboutStory({ t, isLoaded }: AboutStoryProps) {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 md:p-12 shadow-sm">
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

          <div
            className={`inline-flex items-center justify-center gap-3 transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <span className="h-px w-10 bg-emerald-600/70" />
            <h2 className="font-serif text-3xl font-bold text-foreground text-center">
              {t('about.storyTitle')}
            </h2>
            <span className="h-px w-10 bg-emerald-600/70" />
          </div>

          <div className="prose prose-lg mx-auto text-muted-foreground max-w-none">
            <p className="leading-relaxed">{t('about.story1')}</p>
            <p className="leading-relaxed">{t('about.story2')}</p>
            <p className="leading-relaxed">{t('about.story3')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

