import { c as create_ssr_component, e as each, b as escape } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { categoriesInfo } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${each(categoriesInfo, ({ name, slug }) => {
    return `<div><a href="${"/category/" + escape(slug, true)}">${escape(name)}</a> </div>`;
  })}`;
});
export {
  Page as default
};
