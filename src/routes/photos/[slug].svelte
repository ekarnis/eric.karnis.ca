<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`photos/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { gallery: data };
    } else {
      this.error(res.status, data.message);
    }
  }

  function toggleModal(event) {
    let modal = document.getElementsByClassName("modal")[0];
    let modalImage = document.getElementsByClassName("modal-image")[0];

    if (modal.className === "modal") modal.className = "modal is-active";
    else modal.className = "modal";

    if (event) modalImage.src = event.target.src;
  }
</script>

<script>
  export let gallery;
</script>

<style>
  #photo-container {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  .card {
    width: 20vw;
    margin: 10;
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
  .modal-content {
    width: 70vw;
  }
  h1,
  h3 {
    font-family: "Righteous";
  }
</style>

<svelte:head>
  <title>{gallery.title}</title>
</svelte:head>

<h1 class="title is-1 has-text-centered">{gallery.title}</h1>

<br />

<div id="photo-container">

  {#each gallery.pictures as picture}
    <div class="card">
      <div class="card-image">
        <figure class="image">
          <img src={picture.src} alt={picture.name} on:click={toggleModal} />
        </figure>
        <div class="card-content">
          <h3 class="title is-3 has-text-centered">{picture.name}</h3>
        </div>
      </div>
    </div>
  {/each}

  <div class="modal">
    <div class="modal-background" on:click={toggleModal} />
    <div class="modal-content" on:click={toggleModal}>
      <figure class="image">
        <img class="modal-image" alt="Image Popup" />
      </figure>
    </div>
    <button
      class="modal-close is-large"
      aria-label="close"
      on:click={toggleModal} />
  </div>

</div>
