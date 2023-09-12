<script>
import Footer from "$lib/components/footer.svelte";
import Header from "$lib/components/header.svelte";
import "../app.css"
</script>
<Header/>
<main class="flex justify-center m-5">
    <slot/>
</main>
<Footer/>


