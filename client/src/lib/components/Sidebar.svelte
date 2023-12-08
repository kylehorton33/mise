<script>
  import {
    Bottle,
    Glass,
    Menu,
    Login,
    About,
    Account,
    Logout
  } from '$lib/icons'

  import { user } from '$lib/stores'

  function toggleSidebar() {
    const sidebar = document.getElementById('sidebar')
    sidebar.click()
  }
</script>

<div class="drawer">
  <input id="sidebar" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <label for="sidebar" class="btn btn-ghost drawer-button">
      <Menu />
    </label>
  </div>
  <div class="drawer-side">
    <label for="sidebar" aria-label="close sidebar" class="drawer-overlay"
    ></label>
    <ul class="menu mt-16 p-4 w-52 bg-base-200 text-base-content">
      {#if $user}
        <li>
          <a on:click={toggleSidebar} href="/auth/my-account"
            ><Account />My Account</a
          >
        </li>
        <li>
          <form action="/auth?/logout" method="post">
            <button type="submit" class="flex space-x-2"
              ><Logout /> <span>Logout</span>
            </button>
          </form>
        </li>
      {:else}
        <li>
          <a on:click={toggleSidebar} href="/auth/login"><Login /> Login</a>
        </li>
      {/if}

      <div class="divider"></div>
      <li>
        <a on:click={toggleSidebar} href="/recipes">
          <Glass />
          Recipes</a
        >
      </li>
      <li>
        <a on:click={toggleSidebar} href="/ingredients">
          <Bottle />
          Ingredients</a
        >
      </li>
      <div class="divider"></div>
      <li><a on:click={toggleSidebar} href="/about"><About /> About</a></li>
    </ul>
  </div>
</div>
