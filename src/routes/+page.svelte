<script>
	import Scene from './Scene.svelte';
</script>

<div class="min-h-screen relative w-full overflow-hidden">
	<Scene />
	<div class="absolute top-0 left-0 right-0">
		<div class="container flex items-center">
			<div class="max-w-3xl py-24">
				<h1 class="text-gray-200 text-4xl font-bold tracking-tight sm:text-6xl">Game Showcase</h1>
				<p class="mt-6 text-lg leading-8">
					Play collections of games in your browser and have fun.
				</p>
				<div class="mt-10 flex items-center gap-x-6">
					<a
						href="/games"
						class="rounded-full bg-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>Play</a
					>
					<a href="/help" class="text-sm font-semibold leading-6">Learn more </a>
				</div>
			</div>
		</div>
	</div>
</div>
