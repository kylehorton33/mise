<script>
  export let data
</script>

{#if data.user}
  <h1>user logged in</h1>
{:else}
  <h1>no user</h1>
{/if}
