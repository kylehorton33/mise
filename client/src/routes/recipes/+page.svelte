<script>
  export let data
  let filterTerm = "";
</script>

<div class="p-4 flex flex-col items-center space-y-4 w-96 mx-auto">
  <h1 class="text-xl text-center uppercase">Recipes</h1>
  <input
    type="text"
    aria-label="filter"
    name="filter"
    bind:value={filterTerm}
    placeholder="Filter"
    class="input input-bordered w-full max-w-xs"
  />
  <ul data-testid="recipe-list" class="list-disc list-inside w-96 pl-8">
    {#each data.recipes as recipe}
      <li class={filterTerm ^ recipe.includes(filterTerm) ? '' : 'hidden'}>
        {recipe}
      </li>
    {/each}
  </ul>
</div>
