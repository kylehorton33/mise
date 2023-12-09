<script>
  import Sidebar from './Sidebar.svelte'
  import { user } from '$lib/stores'
</script>

<nav class="navbar bg-base-300">
  <div class="navbar-start">
    <Sidebar />
  </div>
  <div class="navbar-center">
    <a href="/" class="btn btn-ghost text-xl lowercase">mise</a>
  </div>
  <div class="navbar-end pr-2">
    {#if $user}
      <a href="/auth/my-account" class="avatar placeholder">
        <div class="bg-neutral text-neutral-content rounded-full w-8">
          <span class="text-sm">U</span>
        </div>
      </a>
    {:else}
      <a href="/auth/login" class="btn btn-ghost">Login</a>
    {/if}
  </div>
</nav>
