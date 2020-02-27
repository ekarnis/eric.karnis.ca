<script>
  export let segment;
</script>

<style>
  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: 30px;
    left: 9px;
  }
  nav {
    max-height: 10vh;
    height: 10vh;
    box-shadow: 0px 1px 10px #999;
  }
  h1 {
    font-family: "Righteous";
  }
  h1,
  h5 {
    color: white;
  }
  .is-outgoing-link {
    text-decoration: underline blue 2px;
  }
</style>

<nav class="navbar is-dark" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <h1 class="title is-1">Eric Karnis</h1>
    </a>

    <button
      class="navbar-burger burger"
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarBasicExample">
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </button>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a
        class="navbar-item"
        aria-current={segment === undefined ? 'page' : undefined}
        href=".">
        <h5 class="title is-5">home</h5>
      </a>

      <a
        class="navbar-item"
        aria-current={segment === 'about' ? 'page' : undefined}
        href="about">
        <h5 class="title is-5">about</h5>
      </a>

      <a
        class="navbar-item"
        aria-current={segment === 'resume' ? 'page' : undefined}
        href="resume">
        <h5 class="title is-5">resume</h5>
      </a>

      <a
        class="navbar-item"
        aria-current={segment === 'photos' ? 'page' : undefined}
        href="photos">
        <h5 class="title is-5">photos</h5>
      </a>

      <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->

      <a
        class="navbar-item"
        rel="prefetch"
        aria-current={segment === 'blog' ? 'page' : undefined}
        href="blog">
        <h5 class="title is-5">blog</h5>
      </a>

      <a
        class="navbar-item is-outgoing-link"
        href="https://www.flickr.com/people/erickarnis/">
        <h5 class="title is-5">flickr</h5>
      </a>

      <a class="navbar-item is-outgoing-link" href="https://github.com/ekarnis">
        <h5 class="title is-5">github</h5>
      </a>

    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <a
          class="button is-light is-large {segment === 'contact' ? 'is-outlined' : ''}"
          href="contact">
          <strong>Contact</strong>
        </a>
      </div>
    </div>
  </div>
</nav>
