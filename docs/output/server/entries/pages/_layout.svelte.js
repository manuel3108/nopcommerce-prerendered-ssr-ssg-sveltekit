import { c as create_ssr_component, v as validate_component, e as each, b as escape } from "../../chunks/ssr.js";
const app = "";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="flex items-center justify-between flex-wrap p-3"><div class="flex items-center flex-shrink-0 text-white mr-6"><img src="/favicon.png" style="height: 30px;" alt="Icon"> <span class="font-semibold text-xl tracking-tight" data-svelte-h="svelte-n8rtxa">Nopcommerce SSR / SSG</span> ${slots.default ? slots.default({}) : ``}</div> <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto text-right" data-svelte-h="svelte-kdgupw"><div class="text-sm lg:flex-grow"></div></div></nav>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-nlz5sv{margin:1rem 3rem}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { categoriesInfo } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {
    default: () => {
      return `${each(categoriesInfo, ({ slug, name, subcategories }) => {
        return `<div><a href="${"/category/" + escape(slug, true)}" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">${escape(name)}</a> <div>${each(subcategories, ({ slug: slug2, name: name2 }) => {
          return `<a href="${"/category/" + escape(slug2, true)}" class="block mt-4 lg:mt-0 text-teal-200 hover:text-white mr-4 ml-4">${escape(name2)} </a>`;
        })}</div> </div>`;
      })}`;
    }
  })} <main class="svelte-nlz5sv">${slots.default ? slots.default({}) : ``} </main>`;
});
export {
  Layout as default
};
