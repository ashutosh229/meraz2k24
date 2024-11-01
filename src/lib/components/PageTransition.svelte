<script>
  import { fly } from "svelte/transition";
  export let key = "";
</script>

{#key key}
  <main
    in:fly={{ x: -50, duration: 500, delay: 500 }}
    out:fly={{ x: 50, duration: 500 }}
  >
    <slot />
  </main>
{/key}
