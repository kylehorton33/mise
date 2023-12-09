<script>
  export let data
</script>

<div class="p-4 flex flex-col items-center space-y-4">
  <h1 class="text-xl uppercase">Ingredients</h1>
  <input
    type="text"
    aria-label="email"
    name="filter"
    placeholder="Filter"
    class="input input-bordered w-full max-w-xs"
  />
  <ul data-testid="ingredient-list" class="list-disc list-inside">
    {#each data.ingredients as ing}
      <li>{ing}</li>
    {/each}
  </ul>
</div>
