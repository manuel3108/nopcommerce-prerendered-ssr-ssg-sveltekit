export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.9938b092.js","app":"_app/immutable/entry/app.ceab7c07.js","imports":["_app/immutable/entry/start.9938b092.js","_app/immutable/chunks/scheduler.0d975f0c.js","_app/immutable/chunks/singletons.d1e33c45.js","_app/immutable/entry/app.ceab7c07.js","_app/immutable/chunks/scheduler.0d975f0c.js","_app/immutable/chunks/index.9312a719.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js')
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
				id: "/category/[category]",
				pattern: /^\/category\/([^/]+?)\/?$/,
				params: [{"name":"category","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/images/[id]",
				pattern: /^\/images\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: () => import('./entries/endpoints/images/_id_/_server.js')
			},
			{
				id: "/product/[product]",
				pattern: /^\/product\/([^/]+?)\/?$/,
				params: [{"name":"product","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
