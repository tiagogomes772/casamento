<script>
	import banner from '$lib/images/banner.jpg';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
  <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Josefin+Sans:wght@100&display=swap" rel="stylesheet">
</svelte:head>

<section class="section">
  <img class="image" alt="Banner" src={banner} />
  <h2 class="support-text"> Mais novidades em breve!</h2>
  <div class="main-text">
    <h1 class="title">
      Diana e Tiago
      <br />
    </h1>
    <h3 class="subtitle">
      27 Maio 2023
      <br />
    </h3>
  </div>

</section>

<style>

  :global(body) {
    margin: 0px;
    overflow: hidden;
  }

  .section {
    overflow: hidden;
    position: relative;
    height: 100vh;
  }

  .image {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: 56% 10%;
  }

  .main-text {
    font-family: 'Great Vibes', cursive;
    position: absolute;
    bottom: 0;
    left: 0;
    color: white;
    width: 100%;
    margin: 16px;
  }

  .title {
    font-size: 60px;
    margin: 0;
    font-weight: 400;
    margin-bottom: 32px;
  }

  .subtitle {
    font-family: 'Josefin Sans', sans-serif;
    margin: 0;
    font-size: 20px;
    font-weight: 700;
  }
  
  .support-text {
    font-family: 'Josefin Sans', sans-serif;
    position: absolute;
    bottom: 0;
    right: 5px;
    font-size: 20px;
    color: white;
  }

</style>