<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`photos.json`)
      .then(r => r.json())
      .then(galleries => {
        return { galleries };
      });
  }
</script>

<script>
  export let galleries;
</script>

<style>
  .photo-container {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  .card {
    width: 22vw;
    margin: 10;
  }
  .card:hover {
    background-color: #ddd;
  }
  .card:nth-child(-n + 3) {
    margin-bottom: 1.5em;
  }

  .card:nth-child(2) {
    margin: 0 1.5em 1.5em;
  }
  .card:nth-child(5) {
    margin: 0 1.5em;
  }
  h1 {
    font-family: "Righteous";
  }
</style>

<svelte:head>
  <title>About</title>
</svelte:head>

<div class="photo-container">
  {#each galleries as gallery}
    <a class="card" rel="prefetch" href="photos/{gallery.slug}">
      <div class="card-image">
        <figure class="image">
          <img src={gallery.pictures[0].src} alt="{gallery.title} Gallery" />
        </figure>
        <div class="card-content">
          <h1 class="title is-1 has-text-centered">{gallery.title}</h1>
        </div>
      </div>
    </a>
  {/each}
</div>
