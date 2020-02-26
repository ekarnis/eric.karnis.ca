<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  main {
    position: relative;
    max-width: 100vw;
    width: 100vw;

    max-height: 90vh;
    height: 90vh;

    background-color: #eee;
    padding: 2em 15vw;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>
