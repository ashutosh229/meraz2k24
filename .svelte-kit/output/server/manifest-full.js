export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","assets/.gitkeep","assets/about_page_background_image_top_new.webp","assets/Antara-Mitra-silho.webp","assets/Antara-Mitra.png","assets/azilic.webp","assets/Background_image.webp","assets/carousal-cultural.webp","assets/carousal-informals.webp","assets/carousal-scitech.webp","assets/Circular_elements(center).png","assets/construction.svg","assets/event-images/culturals/anime.webp","assets/event-images/culturals/Attire-spectra.jpg","assets/event-images/culturals/beyond-sight.webp","assets/event-images/culturals/bridging-the-blanks.webp","assets/event-images/culturals/Cinemaestro.jpg","assets/event-images/culturals/cinemeraz.webp","assets/event-images/culturals/dance-solitaire.jpg","assets/event-images/culturals/deja.webp","assets/event-images/culturals/escapeRoomImage.jpg","assets/event-images/culturals/Euphony.jpg","assets/event-images/culturals/Image-not-found.png","assets/event-images/culturals/In10sity.jpg","assets/event-images/culturals/luminous_ink.jpg","assets/event-images/culturals/melas.webp","assets/event-images/culturals/Mun.jpg","assets/event-images/culturals/Murder-Mystery.jpg","assets/event-images/culturals/nsfw.jpg","assets/event-images/culturals/Nukkad-natak.jpg","assets/event-images/culturals/otp.jpg","assets/event-images/culturals/Phantom.jpg","assets/event-images/culturals/photo-fest.webp","assets/event-images/culturals/Poetry.jpg","assets/event-images/culturals/product-design.jpg","assets/event-images/culturals/quiz.jpg","assets/event-images/culturals/shatter-quest.jpg","assets/event-images/culturals/Shredded.jpg","assets/event-images/culturals/Surreal.jpg","assets/event-images/culturals/virtual-groove.jpg","assets/event-images/econclave/Enchantrx.jpg","assets/event-images/econclave/hero_bg.jpg","assets/event-images/econclave/Mysticpitch.webp","assets/event-images/informals/7-UP.jpg","assets/event-images/informals/Arm-Wrestling.jpg","assets/event-images/informals/balloon-shirt.jpeg","assets/event-images/informals/Balloon-shoot-dart.jpg","assets/event-images/informals/beats.jpg","assets/event-images/informals/Beg-Borrow-Steal.jpg","assets/event-images/informals/bgmi.webp","assets/event-images/informals/Bowling.jpg","assets/event-images/informals/Box-Cricket.jpg","assets/event-images/informals/bull-ride.webp","assets/event-images/informals/Casino.jpg","assets/event-images/informals/Dare-to-Dare.jpg","assets/event-images/informals/Esports.jpeg","assets/event-images/informals/Esports.webp","assets/event-images/informals/freefire.webp","assets/event-images/informals/Game-Planet.jpg","assets/event-images/informals/Housie.jpg","assets/event-images/informals/Image-not-found.png","assets/event-images/informals/Open-Mic.jpg","assets/event-images/informals/Paper-Dance.webp","assets/event-images/informals/Radio-Meraz.jpg","assets/event-images/informals/Ring-Hoopla-Game.jpg","assets/event-images/informals/Sit-Burst.jpg","assets/event-images/informals/Speed-Dating.jpg","assets/event-images/informals/Stand-Up-Comedy.jpg","assets/event-images/informals/Tent-Race.webp","assets/event-images/informals/valorant.webp","assets/event-images/scitech_banners/Aviatya.jpg","assets/event-images/scitech_banners/boatracing.webp","assets/event-images/scitech_banners/codehunt.jpg","assets/event-images/scitech_banners/dsai_hack.webp","assets/event-images/scitech_banners/glider.webp","assets/event-images/scitech_banners/Image-not-found.png","assets/event-images/scitech_banners/lockout.webp","assets/event-images/scitech_banners/mind-control.webp","assets/event-images/scitech_banners/robokabadi.jpg","assets/event-images/scitech_banners/smart_automation.webp","assets/event-images/scitech_banners/treasure_hunt.webp","assets/event-images/scitech_banners/vr.webp","assets/E_Hat.svg","assets/E_Hat_Stars.svg","assets/E_Lights.svg","assets/E_Stars.svg","assets/fb.svg","assets/fb.webp","assets/Frame (1).webp","assets/frame.png","assets/hero_bg.png","assets/hero_bg.webp","assets/hero_bg2.jpg","assets/hero_typo.webp","assets/home_bg.webp","assets/insta.svg","assets/insta.webp","assets/KKK.png","assets/logo.svg","assets/map2.png","assets/meraz_logo_final_2024.svg","assets/new_about_content_background.webp","assets/posters/Image-not-found.png","assets/qafila.png","assets/qafila_silho.webp","assets/schedule_bg.jpeg","assets/SLANT.TTF","assets/sponsors/abis.png","assets/sponsors/aishwarya-salon.jpeg","assets/sponsors/Background_image(moon&sky)_new.png","assets/sponsors/bistro.jpeg","assets/sponsors/BOB.jpg","assets/sponsors/career-launcher.png","assets/sponsors/ccb.jpeg","assets/sponsors/gigmakers.webp","assets/sponsors/Hangingstars_bigger.png","assets/sponsors/Hangingstars_smaller.png","assets/sponsors/hydrabad.jpg","assets/sponsors/ibitf.webp","assets/sponsors/kaksha.jpeg","assets/sponsors/kawa.jpeg","assets/sponsors/meraz.png","assets/sponsors/Slick.png","assets/sponsors/sponsors_background_image.png","assets/sponsors/sponsor_frame.svg","assets/sponsors/Stories by Inside me.jpg","assets/sponsors/Stories by Inside Me_Bold.png","assets/sponsors/street.jpeg","assets/sponsors/unstop.jpeg","assets/star-bg-seamless.jpg","assets/Stars.png","assets/startups_img_bg.svg","assets/Tree.png","assets/trophy-icon.png","assets/video_frame.png","assets/vivek.webp","assets/yash_rathi.webp","assets/yash_rathi_silho.webp","assets/yt.svg","assets/yt.webp","browserconfig.xml","CNAME","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.png","fonts/BluuNext-Bold.otf","fonts/BluuNext-Bolditalic.otf","fonts/BluuNext-Titling.otf","fonts/CinzelDecorative-Regular.ttf","fonts/CormorantUpright-Medium.ttf","fonts/LibreBaskerville-Regular.ttf","fonts/YuseiMagic-Regular.ttf","mstile-150x150.png","robots.txt","safari-pinned-tab.svg","site.webmanifest"]),
	mimeTypes: {".png":"image/png",".webp":"image/webp",".svg":"image/svg+xml",".jpg":"image/jpeg",".jpeg":"image/jpeg",".TTF":"font/ttf",".xml":"text/xml",".otf":"font/otf",".ttf":"font/ttf",".txt":"text/plain",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":"_app/immutable/entry/start.CEM_A_Q5.js","app":"_app/immutable/entry/app.B81VKSSB.js","imports":["_app/immutable/entry/start.CEM_A_Q5.js","_app/immutable/chunks/entry.9UK4DMKs.js","_app/immutable/chunks/scheduler.CELf-BBk.js","_app/immutable/chunks/index.BALHysrm.js","_app/immutable/entry/app.B81VKSSB.js","_app/immutable/chunks/scheduler.CELf-BBk.js","_app/immutable/chunks/index.th4lOInj.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/events",
				pattern: /^\/events\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/events/[type]",
				pattern: /^\/events\/([^/]+?)\/?$/,
				params: [{"name":"type","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/events/[type]/[event]",
				pattern: /^\/events\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"type","optional":false,"rest":false,"chained":false},{"name":"event","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/sponsors",
				pattern: /^\/sponsors\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/startup",
				pattern: /^\/startup\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/startup/[event]",
				pattern: /^\/startup\/([^/]+?)\/?$/,
				params: [{"name":"event","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/timeline",
				pattern: /^\/timeline\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/tnc",
				pattern: /^\/tnc\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/wip",
				pattern: /^\/wip\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
