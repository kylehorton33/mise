<script>
  import '../app.pcss'
  import { Navbar } from '$lib/components'
  import { user } from '$lib/stores'

  export let data

  user.set(data.user)
</script>

<main class="flex flex-col h-screen bg-neutral">
  <Navbar />

  <slot />
</main>
