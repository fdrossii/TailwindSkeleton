<script lang="ts">
    let usuario:string = '';
    let contraseña:string = '';
    
    $: usuario = usuario.trim()
    $: contraseña = contraseña.trim()
</script>

<div class="w-64 h-60 bg-surface-600 border-primary-600 border-2 shadow-sm shadow-primary-500 rounded-xl flex flex-col items-center justify-center font-medium text-lg text-primary-500">
    <input bind:value={usuario} class="bg-primary-200 rounded-xl m-5 p-1 focus:outline-none focus:ring  focus:ring-primary-600" required type="text">
    <input bind:value={contraseña} class="rounded-xl bg-primary-200 m-5 p-1 focus:outline-none focus:ring  focus:ring-primary-600"  type="password">
    <button class="m-5 rounded-xl w-24 h-10 bg-primary-200 hover:bg-primary-500 hover:text-primary-100 active:bg-primary-400 focus:outline-none focus:ring  focus:ring-success-300 ">Login</button>
</div>
