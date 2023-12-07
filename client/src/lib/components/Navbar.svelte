<script>
  import Dropdown from './Dropdown.svelte'
  import { Search } from '$lib/icons'
</script>

<nav class="navbar bg-base-300">
  <div class="navbar-start">
    <Dropdown />
  </div>
  <div class="navbar-center">
    <span class="btn btn-ghost text-xl lowercase">mise</span>
  </div>
  <div class="navbar-end">
    <button class="btn btn-ghost btn-circle">
      <Search />
    </button>
  </div>
</nav>
