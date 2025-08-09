<script lang="ts">
  import "@/app.css"
  const { children } = $props()
</script>

<div class="flex h-screen flex-col">
  <main class="m-0 flex flex-1 flex-col p-2">
    {@render children()}
  </main>
</div>
