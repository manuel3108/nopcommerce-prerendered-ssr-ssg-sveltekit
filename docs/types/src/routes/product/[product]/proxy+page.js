// @ts-nocheck
export const prerender = true;

/** @param {Parameters<import('./$types').PageLoad>[0]} event */
export async function load({ data }) {
	return {
		...data,
		streamed: {
			price: new Promise((fulfil) => {
				setTimeout(() => {
					fulfil(data.productDetailsData.price * 10 + Math.random());
				}, 1000);
			})
		}
	};
}
