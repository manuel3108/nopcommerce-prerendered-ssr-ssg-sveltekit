import { c as create_ssr_component, b as escape, e as each, i as is_promise, n as noop, f as add_attribute } from "../../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".header.svelte-4yp1jy.svelte-4yp1jy{text-align:center;font-size:2rem}.content.svelte-4yp1jy.svelte-4yp1jy{display:flex}.details.svelte-4yp1jy.svelte-4yp1jy{margin-left:1rem}.images.svelte-4yp1jy.svelte-4yp1jy{margin-right:1rem;display:flex;justify-content:space-between;flex-wrap:wrap}.images.svelte-4yp1jy img.svelte-4yp1jy{max-width:300px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { productDetailsData } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div><div class="header svelte-4yp1jy">${escape(productDetailsData.name)}<br><br></div> <div class="content svelte-4yp1jy"><div class="images svelte-4yp1jy">${each(productDetailsData.images, ({ alt, title, id }) => {
    return `<img src="${"/images/" + escape(id, true)}"${add_attribute("alt", alt, 0)}${add_attribute("title", title, 0)} class="svelte-4yp1jy">`;
  })}</div> <div class="details svelte-4yp1jy"><div><!-- HTML_TAG_START -->${productDetailsData.shortDescription}<!-- HTML_TAG_END --><br><br></div> <div><!-- HTML_TAG_START -->${productDetailsData.longDescription}<!-- HTML_TAG_END --><br><br></div> <div>${escape(productDetailsData.price)}<br><br></div> ${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
				Loading special customer price...
			`;
    }
    return function(value) {
      return ` ${escape(value)} `;
    }(__value);
  }(data.streamed.price)}</div></div> </div>`;
});
export {
  Page as default
};
