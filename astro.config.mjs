import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeNova from 'starlight-theme-nova';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
	site: 'https://tpsquinta.zanardimichael.it',
	base: '/',

	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
	},

	integrations: [
		starlight({
			title: 'TPS Quinta',
			logo: {
				src: '/public/favicon.svg',
			},
			favicon: '/favicon.svg',
			customCss: [
				'./src/katex.min.css',
				'./src/custom.css',
			],
			description: 'Dispensa di TPS',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/zanardimichael' }
			],

			plugins: [
				starlightThemeNova(),
			],

			head: [
				{
					tag: 'script',
					content: `
                        function initProgressBar() {
                            let bar = document.getElementById('scroll-progress');
                            if (!bar) {
                                bar = document.createElement('div');
                                bar.id = 'scroll-progress';
                                bar.style.position = 'fixed';
                                bar.style.top = '0';
                                bar.style.left = '0';
                                bar.style.height = '4px';
                                bar.style.backgroundColor = 'var(--sl-color-accent)'; 
                                bar.style.zIndex = '9999';
                                bar.style.width = '0%';
                                bar.style.transition = 'width 0.1s ease-out';
                                document.body.appendChild(bar);
                            }
                            
                            window.addEventListener('scroll', () => {
                                const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
                                const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                                if (height > 0) {
                                    const scrolled = (winScroll / height) * 100;
                                    bar.style.width = scrolled + '%';
                                } else {
                                    bar.style.width = '0%';
                                }
                            });
                        }
                        
                        document.addEventListener('DOMContentLoaded', initProgressBar);
                    `
				}
			],

			sidebar: [
				{
					label: '📚 Corso di TPS Quinta',
					items: [
						{
							label: 'Introduzione al Corso',
							link: '/lezioni/',
						},
						{
							label: 'Il Web (WWW)',
							collapsed: true,
							items: [
								{
									label: 'Panoramica Web',
									link: '/lezioni/web/',
								},
								{
									label: 'Linguaggio HTML',
									collapsed: true,
									autogenerate: { directory: 'lezioni/web/html' },
								},
								{
									label: 'Fogli di Stile CSS',
									collapsed: true,
									autogenerate: { directory: 'lezioni/web/css' },
								},
								{
									label: 'Programmazione JavaScript',
									collapsed: true,
									autogenerate: { directory: 'lezioni/web/javascript' },
								},
							],
						},
						{
							label: 'Web Services',
							autogenerate: { directory: 'lezioni/introduzione' },
							collapsed: true,
						},
						{
							label: 'UML | Unified Modeling Language',
							autogenerate: { directory: 'lezioni/uml' },
							collapsed: true,
						},
					]
				},
			],
		}),
	],
});