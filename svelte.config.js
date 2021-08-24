import sveltePreprocess from 'svelte-preprocess'

// https://github.com/sveltejs/svelte/issues/2621
// Because I work in a hospital I have to make this shit compatible with IE11 >_<
export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess()
}
