<script lang="ts">
	import '@/app.css'
	let { children } = $props()
</script>

<div class="h-screen flex flex-col">
	<main class="flex flex-1 flex-col p-2 m-0">
		{@render children()}
	</main>
</div>
