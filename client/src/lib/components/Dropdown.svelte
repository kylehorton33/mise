<script>
  import { Menu } from '$lib/icons'
</script>

<div class="drawer">
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <!-- Page content here -->
    <label for="my-drawer" class="btn btn-ghost drawer-button">
      <Menu />
    </label>
  </div>
  <div class="drawer-side">
    <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"
    ></label>
    <ul class="menu mt-16 p-4 w-52 bg-base-200 text-base-content">
      <!-- Sidebar content here -->
      <li>Sidebar Item 1</li>
      <li>Sidebar Item 2</li>
    </ul>
  </div>
</div>
