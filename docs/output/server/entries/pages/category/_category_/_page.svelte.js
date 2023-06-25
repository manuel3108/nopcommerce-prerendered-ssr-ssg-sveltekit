import { c as create_ssr_component, b as escape, e as each, f as add_attribute } from "../../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".header.svelte-1nz6cki.svelte-1nz6cki{text-align:center;font-size:2rem}.categories.svelte-1nz6cki.svelte-1nz6cki,.products.svelte-1nz6cki.svelte-1nz6cki{display:flex;justify-content:center;flex-wrap:wrap}.category.svelte-1nz6cki.svelte-1nz6cki,.product.svelte-1nz6cki.svelte-1nz6cki{margin:0.25rem}.category.svelte-1nz6cki img.svelte-1nz6cki,.product.svelte-1nz6cki img.svelte-1nz6cki{max-width:300px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="header svelte-1nz6cki">${escape(data.categoryDetailsData.name)}</div> ${data.categoryDetailsData.subcategories.length > 0 ? `<h2 data-svelte-h="svelte-1ttyjw8">Subcategories</h2> <div class="categories svelte-1nz6cki">${each(data.categoryDetailsData.subcategories, (subcategory) => {
    return `<div class="category svelte-1nz6cki"><a href="${"/category/" + escape(subcategory.slug, true)}">${escape(subcategory.name)} <img src="${"/images/" + escape(subcategory.imageId, true)}"${add_attribute("alt", subcategory.alt, 0)}${add_attribute("title", subcategory.title, 0)} class="svelte-1nz6cki"></a> </div>`;
  })}</div>` : ``} ${data.categoryDetailsData.products.length > 0 ? `<h2 data-svelte-h="svelte-k4te9i">Products</h2> <div class="products svelte-1nz6cki">${each(data.categoryDetailsData.products, (product) => {
    return `<div class="product svelte-1nz6cki"><a href="${"/product/" + escape(product.slug, true)}">${escape(product.name)} <img src="${"/images/" + escape(product.imageId, true)}"${add_attribute("alt", product.imageAlt, 0)} class="svelte-1nz6cki"></a> </div>`;
  })}</div>` : ``}`;
});
export {
  Page as default
};
