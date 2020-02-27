<style>
  section {
    width: 40vw;
  }
</style>

<svelte:head>
  <title>Contact</title>
</svelte:head>

<div class="columns">
  <section class="column is-half is-offset-one-quarter ">
    <div class="card ">
      <div class="card-content">
        <div class="container">

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Your Email</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input
                    class="input is-danger"
                    type="text"
                    placeholder="example@example.ca" />
                </div>
                <p class="help is-danger">This field is required</p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Subject</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input
                    class="input is-danger"
                    type="text"
                    placeholder="What's up?" />
                </div>
                <p class="help is-danger">This field is required</p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Subject</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <textarea
                    class="textarea is-danger"
                    type="text"
                    placeholder="What's really up?" />
                </div>
                <p class="help is-danger">This field is required</p>
              </div>
            </div>
          </div>

          <div class="buttons is-centered">
            <button class="button is-dark">
              <strong>Submit</strong>
            </button>
          </div>

        </div>
      </div>
    </div>
  </section>

</div>
