<script>
  export let data
  let filterTerm = ''

  function handleChange(data) {
    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('inStock', data.inStock)
    fetch('?/stock', {
      method: 'POST',
      body: formData
    })
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
        class="{filterTerm ^
        name.toLowerCase().includes(filterTerm.toLowerCase())
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
            on:change={() => handleChange({ name, inStock })}
          />
        </span>
      </li>
    {/each}
  </ul>
</div>
