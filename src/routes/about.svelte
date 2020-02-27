<style>
  section {
    width: 40vw;
  }
  p {
    margin-block: 1em;
  }
  .columns {
    align-items: center;
  }
</style>

<svelte:head>
  <title>About</title>
</svelte:head>

<div class="columns">

  <section class="column is-one-third ">
    <div class="card">
      <div class="card-content">

        <h3 class="title is-3">About Me</h3>

        <p>I am a fullstack developer based in Toronto.</p>
        <p>
          I like frontend design, working with clients and users, and security.
        </p>
        <p>I also like hiking, photography, and road trips.</p>
        <p>
          I have a passion for learning, which is why I recently completed the
          <a
            href="https://www.elearnsecurity.com/certification/ejpt/"
            target="_blank"
            rel="noopener noreferrer">
            elearnSecurity Junior Pentester
          </a>
          certification.
        </p>
        <p>
          That's also why I am working on the
          <a
            href="https://www.elearnsecurity.com/certification/ecppt/"
            target="_blank"
            rel="noopener noreferrer">
            elearnSecurity Certified Professional Penetration Tester
          </a>
          certification.
        </p>

      </div>
    </div>
  </section>

  <section class="column is-one-third ">

    <div class="card">
      <div class="card-image">
        <figure class="image is-square">
          <img src="me.jpg" alt="Picture of Eric Karnis" />
        </figure>
      </div>
    </div>

  </section>

  <section class="column is-one-third ">
    <div class="card">
      <div class="card-content">

        <h3 class="title is-3">What Am I Looking For?</h3>

        <p>
          For my next role, I am hoping to find a place where I can continue to
          learn how to write high quality, high performing, and highly
          maintanable code.
        </p>
        <p>
          My highest priority is to find work where I can grow, somewhere I can
          contribute meaningfully both to your company and my career.
        </p>
        <br />
        <br />

      </div>
    </div>
  </section>

</div>
