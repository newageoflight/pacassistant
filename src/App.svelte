<script lang='ts'>
  import { uniq, intersection } from 'lodash-es';
  import Icon from '@iconify/svelte';
  import Modal from 'svelte-simple-modal';

  import Footer from "./lib/components/Footer.svelte";

  import { PreOpWorkupNames } from "./lib/constants/PreOpWorkups";
  import type { CoercedWorkup, Workup } from "./lib/types/Workups";
  import { coerceType } from "./lib/utils/utils";
  
  let selectedOps = [];
  let conditions = [];

  function getWorkup(ops: string[]): CoercedWorkup {
    let chosen: Workup[] = ops.map(v => PreOpWorkupNames[v]);
    // while the ES6 spread syntax is good there are some special rules for merging here:
    // - null values represent "no workup needed" and have lower priority than "some workup needed", but will merge if both are null
    // - single strings need to be coerced to string arrays
    // - array values need to be merged as if they were sets
    if (chosen.length > 1)
      return chosen.reduce((a, b) => {
        let merged = Object.fromEntries(Object.entries(a).map(([k,v]) => [k, coerceType(v)]));
        console.log(merged);
        Object.entries(b).forEach(([k, v]) => {
          if (a[k] === null || b[k] === null)
            merged[k] = null;
          else
            merged[k] = uniq([...coerceType(a[k]), ...coerceType(v)]) as string[];
        })
        return merged;
      }) as CoercedWorkup;
    else if (chosen.length === 1)
      return Object.fromEntries(Object.entries(chosen[0]).map(([k,v]) => [k, coerceType(v)]));
    else
      return {}
  }

  $: myWU = getWorkup(selectedOps);
  $: conditionedItems = Object.fromEntries(Object.entries(myWU).filter(([k,v]) => v?.length > 0));
  $: flatConds = uniq(Object.values(conditionedItems).flat()) as string[];
  $: nonConditionedItems = Object.fromEntries(Object.entries(myWU).filter(([k,v]) => v == null || v?.length === 0));
  $: conditionSatisfiedItems = Object.fromEntries(Object.entries(myWU).filter(([k,v]) => v?.length && intersection(conditions, v).length > 0));
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
</svelte:head>

<Modal>
  <main>
      <header>
        <Icon icon='whh:pacman' style='font-size: 30px; transform: translateY(2px);' />
        <span style='width: 10px;' />
        <h1>PAC Assistant</h1>
      </header>
      
      <div class="checklist">
        <h2>The patient is coming for:</h2>
        {#each Object.keys(PreOpWorkupNames) as op}
          <label>
            <input type="checkbox" bind:group={selectedOps} value={op}>
            {op}
          </label>
          <br/>
        {/each}
        {#if selectedOps.length > 0}
          <p>{selectedOps.join(' + ')}</p>
          <h3>Check any of the following that apply:</h3>
          {#if flatConds.length > 0}
            {#each flatConds as cond}
              <label>
                <input type="checkbox" bind:group={conditions} value={cond}>
                {cond}
              </label>
              <br/>
            {/each}
          {/if}
        {/if}
      </div>
      
      {#if selectedOps.length > 0}
        <div class="requirements">
          <h2>Investigations required:</h2>
          <ul>
            {#each Object.keys(nonConditionedItems) as wuItem}
              <li>{wuItem}</li>
            {/each}
            {#each Object.keys(conditionSatisfiedItems) as wuItem}
              <li>{wuItem}</li>
            {/each}
            <li>Bloods + swabs</li>
          </ul>
          <p>⚠️ As per pandemic rules, please strongly encourage any patients coming from <a href="https://covid19nearme.com.au/">a hot zone</a> to get a <strong>COVID swab within 4 days</strong> of coming to hospital</p>
        </div>
      {/if}

      <Footer />
  </main>
</Modal>

<style lang='scss'>
  :root {
    font-family: "Open Sans", Arial, Helvetica, sans-serif;
  }

  :global(html, body, #app) {
    margin: 0;
    min-height: 100vh;
  }
  
  .checklist, .requirements {
    padding: 5px 1rem;
    overflow-y: auto;
  }

  main {
    width: 100vw;
  }

  @media only screen and (min-width: 768px) {
    .requirements {
      border-left: 2px solid #87cefa;
    }

    main {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 4em 1fr calc(1rem + 10px);
      gap: 0px 0px;
      grid-auto-flow: row;
      grid-template-areas:
        "header header"
        "checklist requirements"
        "footer footer";
      height: 100vh;
    }
  }

  @media only screen and (max-width: 768px) {
    .checklist {
      padding-bottom: 1rem;
    }

    .requirements {
      border-top: 2px solid #87cefa;
    }
  }

  header {
    grid-area: header;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #87cefa;
    color: white;
    padding: 0 1rem;
    position: sticky;
    top: 0;
  }

  :global(h1, h2, h3) {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .checklist {
    grid-area: checklist;
  }

  .requirements {
    grid-area: requirements;
  }
</style>