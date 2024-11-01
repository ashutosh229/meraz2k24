<script>
  import Event from "$lib/components/Event.svelte";
</script>

<Event {...$$props}>
  <slot />
</Event>
