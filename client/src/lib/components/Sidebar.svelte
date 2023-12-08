<script>
  import { Menu } from '$lib/icons'

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
      <li><a on:click={toggleSidebar} href="/auth/login">Login</a></li>
      <li>
        <form action="/auth?/logout" method="post">
          <button type="submit">
            Logout
          </button>
        </form>
      </li>
    </ul>
  </div>
</div>
