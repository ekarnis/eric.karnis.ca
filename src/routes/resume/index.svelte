<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`resume.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<svelte:head>
  <title>Resume</title>
</svelte:head>

<div class="card">
  <div class="card-content">

    <h3 class="title is-3">Resume</h3>

    <div class="tabs is-centered">
      <ul>
        {#each posts as section}
          <li class={section.title === 'Work Experience' ? 'is-active' : ''}>
            <a rel="prefetch" href="resume/{section.slug}">{section.title}</a>
          </li>
        {/each}
      </ul>
    </div>

  </div>
</div>
