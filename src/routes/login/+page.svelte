<script lang="ts">
    let usuario:string = '';
    let contraseña:string = '';
    
    $: usuario = usuario.trim()
    $: contraseña = contraseña.trim()
</script>

<div class="w-64 h-60 bg-transparent border-lime-100 border-2 rounded-xl flex flex-col items-center justify-center">
    <input bind:value={usuario} class="bg-slate-300 rounded-xl m-5 p-1" required type="text">
    <input bind:value={contraseña} class="rounded-xl bg-slate-300 m-5 p-1"  type="password">
    <button class="m-5 rounded-xl w-24 h-10 bg-slate-300 hover:bg-slate-400 active:bg-slate-700 focus:outline-none focus:ring  focus:ring-violet-700 ">Login</button>
</div>
