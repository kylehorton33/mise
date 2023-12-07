<script>
  import '../app.pcss'
  import { Navbar } from '$lib/components'
</script>

<main class="flex flex-col h-screen bg-neutral">
  <Navbar />

  <slot />
</main>
