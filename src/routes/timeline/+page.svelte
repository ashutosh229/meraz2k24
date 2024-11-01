<script>
  import SectionHeader from "$lib/components/SectionHeader.svelte";
</script>

<svelte:head>
  <title>Timeline | Meraz '24</title>
  <script
    type="text/javascript"
    src="https://unpkg.com/vis-timeline@latest/standalone/umd/vis-timeline-graph2d.min.js"
  ></script>
  <link
    href="https://unpkg.com/vis-timeline@latest/styles/vis-timeline-graph2d.min.css"
    rel="stylesheet"
    type="text/css"
  />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cormorant+Upright:wght@300;400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div class="container">
  <div class="heading">
    <SectionHeader name="Schedule" />
  </div>
  <div class="box">
    <a
      href="https://docs.google.com/spreadsheets/d/1Ze7gMTYuhjnBzuGcTF-m5vdGILBFTtayVSlS9WlqvTA/edit#gid=2115344226"
      class="redirect-button"
    >
      View in Google Sheets
    </a>
  </div>
</div>

<style>
  .container {
    background-image: url("/assets/schedule_bg.jpeg");
    font-family: LibreBaskerville;
    font-size: 1.5rem;
    align-items: center;
    background-size: cover;
    padding-bottom: 9.563rem;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    height: 100vh;
  }

  .heading {
    position: relative;
    margin-bottom: 20vh;
  }

  .box {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .redirect-button {
    padding: 10px 40px;
    border-radius: 10px;
    vertical-align: middle;
    border: 2px solid #bfbfbf;
    text-align: center;
    font-family: LibreBaskerville;
  }

  .redirect-button:hover {
    background-color: #add8e6; /* Light blue color */
    font-weight: 900;
    color: #121212;
  }
</style>
