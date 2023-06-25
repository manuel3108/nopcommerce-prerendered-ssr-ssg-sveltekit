export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.9938b092.js","app":"_app/immutable/entry/app.ceab7c07.js","imports":["_app/immutable/entry/start.9938b092.js","_app/immutable/chunks/scheduler.0d975f0c.js","_app/immutable/chunks/singletons.d1e33c45.js","_app/immutable/entry/app.ceab7c07.js","_app/immutable/chunks/scheduler.0d975f0c.js","_app/immutable/chunks/index.9312a719.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
