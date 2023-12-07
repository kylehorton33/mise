<script>
  import Sidebar from './Sidebar.svelte'
  import { Search } from '$lib/icons'
</script>

<nav class="navbar bg-base-300">
  <div class="navbar-start">
    <Sidebar />
  </div>
  <div class="navbar-center">
    <a href="/" class="btn btn-ghost text-xl lowercase">mise</a>
  </div>
  <div class="navbar-end">
    <button class="btn btn-ghost btn-circle">
      <Search />
    </button>
  </div>
</nav>
