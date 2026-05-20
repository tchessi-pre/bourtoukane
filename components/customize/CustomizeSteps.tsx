"use client"

type TFunction = (key: string) => string

export type CustomizeStepsProps = {
  t: TFunction
}

export function CustomizeSteps({ t }: CustomizeStepsProps) {
  return (
    <section className="px-4 pb-20">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="border-t border-foreground pt-4 text-center sm:text-left">
              <p className="font-serif text-4xl text-accent tabular-nums">
                {String(step).padStart(2, '0')}
              </p>
              <h3 className="font-serif text-2xl mt-2">
                {t(`customize.step${step}.title`)}
              </h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                {t(`customize.step${step}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

