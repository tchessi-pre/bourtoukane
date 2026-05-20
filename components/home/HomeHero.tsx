'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { HeroSocialSidebar } from '@/components/home/HeroSocialSidebar';

export function HomeHero() {
	const { t, locale } = useI18n();
	const [isLoaded, setIsLoaded] = useState(false);
	const textilePatternStyle: React.CSSProperties = {
		backgroundImage:
			'repeating-linear-gradient(135deg, hsl(var(--accent) / 0.55) 0px, hsl(var(--accent) / 0.55) 10px, hsl(var(--primary) / 0.50) 10px, hsl(var(--primary) / 0.50) 20px, hsl(var(--foreground) / 0.08) 20px, hsl(var(--foreground) / 0.08) 30px)',
	};

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	return (
		<section className='relative min-h-screen overflow-hidden bg-secondary'>
			<div className='absolute inset-0 overflow-hidden'>
				<div
					className={cn(
						'hidden sm:block absolute top-[14%] right-[6%] h-40 w-40 rotate-45 border-2 border-accent/10 transition-all duration-1000',
						'animate-float',
						isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
					)}
				/>
				<div
					className={cn(
						'hidden md:block absolute top-[62%] right-[14%] h-24 w-24 rotate-12 bg-accent/5 transition-all duration-1000 delay-200',
						'animate-float',
						isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
					)}
					style={{ animationDuration: '7s', animationDirection: 'reverse' }}
				/>
				<div
					className={cn(
						'absolute top-[30%] left-[4%] h-16 w-16 rounded-full border border-primary/10 transition-all duration-1000 delay-300',
						'animate-float',
						isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
					)}
					style={{ animationDuration: '8s' }}
				/>
				<div
					className={cn(
						'absolute bottom-[18%] left-[10%] h-20 w-20 rotate-45 bg-primary/5 transition-all duration-1000 delay-150',
						'animate-float',
						isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
					)}
					style={{ animationDuration: '9s', animationDirection: 'reverse' }}
				/>

				<div className='absolute inset-0 opacity-[0.02]'>
					{Array.from({ length: 8 }).map((_, i) => (
						<div
							key={i}
							className='absolute h-full w-[3px] bg-foreground'
							style={{
								left: `${12 + i * 12}%`,
								transform: 'skewX(-20deg)',
								animation: `subtlePulse 3s ease-in-out ${i * 0.2}s infinite`,
							}}
						/>
					))}
				</div>

				<svg
					className='absolute inset-0 h-full w-full opacity-[0.015]'
					xmlns='http://www.w3.org/2000/svg'
					aria-hidden='true'
				>
					<defs>
						<pattern
							id='adinkra-home'
							x='0'
							y='0'
							width='100'
							height='100'
							patternUnits='userSpaceOnUse'
						>
							<circle
								cx='50'
								cy='50'
								r='4'
								fill='none'
								stroke='currentColor'
								strokeWidth='1'
								className='text-foreground'
							/>
							<path
								d='M50 30 L50 70 M30 50 L70 50'
								stroke='currentColor'
								strokeWidth='0.5'
								className='text-foreground'
							/>
							<path
								d='M35 35 L65 65 M65 35 L35 65'
								stroke='currentColor'
								strokeWidth='0.5'
								className='text-foreground'
							/>
						</pattern>
					</defs>
					<rect width='100%' height='100%' fill='url(#adinkra-home)' />
				</svg>
			</div>

			<HeroSocialSidebar isVisible={isLoaded} />

			<div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:pl-24'>
				<div className='grid min-h-screen items-center gap-10 lg:grid-cols-2 lg:gap-0 pt-24'>
					<div className='order-2 flex flex-col justify-center items-center text-center lg:items-start lg:text-left lg:order-1 lg:pr-16 pb-12 lg:pb-0'>
						<div className='space-y-8'>
							<div
								className={cn(
									'flex flex-wrap items-center justify-center lg:justify-start gap-3 transition-all duration-700',
									isLoaded
										? 'opacity-100 translate-x-0'
										: 'opacity-0 -translate-x-8'
								)}
							>
								<div
									className={cn(
										'h-px w-12 bg-accent',
										isLoaded ? 'animate-scale-x' : ''
									)}
								/>
								<span className='text-xs font-medium uppercase tracking-[0.2em] text-accent'>
									{locale === 'fr' ? 'Artisanat · Afrique' : 'Craft · Africa'}
								</span>
								<span className='inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm'>
									<Sparkles className='h-3.5 w-3.5 text-accent animate-subtle-pulse' />
									{locale === 'fr' ? 'Fait main' : 'Handcrafted'}
								</span>
								<span className='relative inline-flex items-center overflow-hidden rounded-full border border-border/60 bg-card/50 px-3 py-1 text-xs text-foreground/80 backdrop-blur-sm'>
									<span
										className='absolute inset-0 opacity-80'
										style={textilePatternStyle}
									/>
									<span className='relative font-medium tracking-wide'>
										{locale === 'fr' ? 'Tissus africains' : 'African textiles'}
									</span>
								</span>
								{/* <span className='hidden sm:inline-flex items-center rounded-full border border-border/60 bg-background/40 px-3 py-1 text-xs text-foreground/80 backdrop-blur-sm'>
									{locale === 'fr' ? 'Chutes revalorisées' : 'Upcycled scraps'}
								</span> */}
							</div>

							<h1 className='font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.08] tracking-tight'>
								<span
									className={cn(
										'block transition-all duration-700 delay-100',
										isLoaded
											? 'opacity-100 translate-y-0'
											: 'opacity-0 translate-y-8'
									)}
								>
									{locale === 'fr' ? "L'élégance" : 'The Art of'}
								</span>
								<span
									className={cn(
										'block text-accent transition-all duration-700 delay-200',
										isLoaded
											? 'opacity-100 translate-y-0'
											: 'opacity-0 translate-y-8'
									)}
								>
									{locale === 'fr' ? 'africaine' : 'Seeing'}
								</span>
								<span
									className={cn(
										'block italic font-normal text-muted-foreground transition-all duration-700 delay-300',
										isLoaded
											? 'opacity-100 translate-y-0'
											: 'opacity-0 translate-y-8'
									)}
								>
									{locale === 'fr' ? 'au bout du regard.' : 'Differently'}
								</span>
							</h1>

							<p
								className={cn(
									'text-lg md:text-xl leading-relaxed max-w-md text-muted-foreground transition-all duration-700 delay-400 mx-auto lg:mx-0',
									isLoaded
										? 'opacity-100 translate-y-0'
										: 'opacity-0 translate-y-8'
								)}
							>
								{t('hero.subtitle')}
							</p>
							<p
								className={cn(
									'text-sm md:text-base leading-relaxed max-w-md text-muted-foreground/90 transition-all duration-700 delay-450 mx-auto lg:mx-0',
									isLoaded
										? 'opacity-100 translate-y-0'
										: 'opacity-0 translate-y-8'
								)}
							>
								{locale === 'fr'
									? "Chaque monture est unique grâce aux chutes de tissus récupérées chez les couturières."
									: 'Each frame is unique thanks to upcycled fabric scraps collected from seamstresses.'}
							</p>

							<div
								className={cn(
									'flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 pt-2 transition-all duration-700 delay-500 w-full',
									isLoaded
										? 'opacity-100 translate-y-0'
										: 'opacity-0 translate-y-8'
								)}
							>
								<Button
									asChild
									size='lg'
									className='text-base px-8 h-14 group bg-primary text-primary-foreground shadow-lg shadow-foreground/10 hover:bg-primary/90 focus-visible:ring-primary/30'
								>
									<Link href='/shop'>
										{t('hero.shopNow')}
										<ArrowRight className='ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1' />
									</Link>
								</Button>
								<Button
									asChild
									variant='outline'
									size='lg'
									className='text-base px-8 h-14 border-primary/20 bg-background/50 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300'
								>
									<Link href='/customize'>{t('hero.customize')}</Link>
								</Button>
							</div>

							<div
								className={cn(
									'flex flex-wrap justify-center lg:justify-start gap-x-12 gap-y-6 pt-8 border-t border-border transition-all duration-700 delay-600 w-full',
									isLoaded
										? 'opacity-100 translate-y-0'
										: 'opacity-0 translate-y-8'
								)}
							>
								<div className='group cursor-default text-center lg:text-left'>
									<p className='font-serif text-3xl md:text-4xl font-bold text-foreground transition-transform duration-300 group-hover:scale-110'>
										100%
									</p>
									<p className='text-sm text-muted-foreground uppercase tracking-wide'>
										{locale === 'fr' ? 'Fait Main' : 'Handcrafted'}
									</p>
								</div>
								<div className='group cursor-default text-center lg:text-left'>
									<p className='font-serif text-3xl md:text-4xl font-bold text-foreground transition-transform duration-300 group-hover:scale-110'>
										Unique
									</p>
									<p className='text-sm text-muted-foreground uppercase tracking-wide'>
										{locale === 'fr' ? 'À Votre Image' : 'Made for You'}
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className='relative order-1 lg:order-2 flex items-center justify-center lg:justify-end'>
						<div
							className={cn(
								'relative w-full max-w-lg lg:max-w-none transition-all duration-1000 delay-200',
								isLoaded
									? 'opacity-100 translate-x-0'
									: 'opacity-0 translate-x-12'
							)}
						>
							<div className='relative aspect-3/4 lg:aspect-4/5 w-full lg:w-[90%] lg:ml-auto overflow-hidden rounded-3xl group shadow-2xl shadow-foreground/10'>
								<div className='absolute inset-0 bg-foreground/5' />
								<Image
									src='/images/hero-bg.png'
									alt={
										locale === 'fr'
											? 'Lunettes artisanales africaines'
											: 'African artisanal eyewear'
									}
									fill
									className='object-cover transition-transform duration-700 group-hover:scale-105'
									sizes='(max-width: 1024px) 100vw, 50vw'
									priority
								/>
								<div className='pointer-events-none absolute inset-0 bg-linear-to-t from-background/40 via-transparent to-transparent' />
								<div
									className='pointer-events-none absolute top-6 left-6 h-20 w-20 rotate-6 overflow-hidden rounded-2xl shadow-xl shadow-foreground/10 ring-1 ring-inset ring-foreground/10 animate-float'
									style={{ animationDuration: '6s' }}
								>
									<div
										className='absolute inset-0'
										style={textilePatternStyle}
									/>
									<div className='absolute inset-0 bg-linear-to-br from-white/25 to-transparent dark:from-white/10' />
								</div>
								<div className='pointer-events-none absolute inset-0 ring-1 ring-inset ring-foreground/10' />
								<div className='pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 dark:ring-white/5' />
							</div>

							<div
								className={cn(
									'absolute -bottom-7 -left-6 lg:-left-12 bg-card/80 p-6 shadow-xl border border-border/60 max-w-[240px] backdrop-blur-md transition-all duration-700 delay-700',
									isLoaded
										? 'opacity-100 translate-y-0'
										: 'opacity-0 translate-y-8'
								)}
							>
								<p className='font-serif text-sm text-muted-foreground italic leading-relaxed'>
									{locale === 'fr'
										? '"Des chutes de tissus, une nouvelle vie."'
										: '"From fabric scraps to a new life."'}
								</p>
								<div className='mt-3 flex items-center gap-2'>
									<div className='h-px flex-1 bg-accent' />
									<Sparkles className='h-4 w-4 text-accent animate-subtle-pulse' />
								</div>
							</div>

							<div
								className={cn(
									'absolute top-8 -right-4 lg:top-12 lg:-right-8 w-24 h-24 lg:w-32 lg:h-32 border-2 border-accent/30 transition-all duration-700 delay-500',
									'animate-float',
									isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
								)}
								style={{ animationDuration: '10s' }}
							/>
						</div>
					</div>
				</div>
			</div>

			<div
				className={cn(
					'absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-muted-foreground transition-all duration-700 delay-1000',
					isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
				)}
			>
				<span className='text-xs uppercase tracking-widest'>
					{locale === 'fr' ? 'Défiler' : 'Scroll'}
				</span>
				<div className='w-px h-12 bg-border relative overflow-hidden'>
					<div className='absolute top-0 left-0 w-full bg-accent h-1/2 animate-scroll-indicator' />
				</div>
			</div>
		</section>
	);
}
