const prerender = true;
async function load({ data }) {
  return {
    ...data,
    streamed: {
      price: new Promise((fulfil) => {
        setTimeout(() => {
          fulfil(data.productDetailsData.price * 10 + Math.random());
        }, 1e3);
      })
    }
  };
}
export {
  load,
  prerender
};
