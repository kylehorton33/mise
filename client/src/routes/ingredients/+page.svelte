<script>
  export let data
  let filterTerm = ''

  function handleChange(name, inStock) {
    // set inStock for particular ingredient
    console.log(name, inStock)
  }
</script>

<div class="p-4 flex flex-col items-center space-y-4">
  <h1 class="text-xl uppercase">Ingredients</h1>
  <input
    type="text"
    aria-label="filter"
    name="filter"
    bind:value={filterTerm}
    placeholder="Filter"
    class="input input-bordered w-full max-w-xs"
  />
  <ul data-testid="ingredient-list" class="list-disc list-inside w-72">
    {#each data.ingredients as { name, inStock }}
      <li
        class="{filterTerm ^ name.includes(filterTerm)
          ? ''
          : 'hidden'} flex mb-4 my-auto"
      >
        <span>{name}</span>
        <span class="grow"></span>
        <span>
          <input
            type="checkbox"
            checked={inStock}
            class="checkbox"
            on:change={() => handleChange(name, inStock)}
          />
        </span>
      </li>
    {/each}
  </ul>
</div>
