export const prerender = true;

/** @type {import('./$types').PageLoad} */
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
