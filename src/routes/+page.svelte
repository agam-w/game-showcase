<script>
	import Scene from './Scene.svelte';
</script>

<div class="min-h-screen relative w-full overflow-hidden">
	<Scene />
	<div class="absolute top-0 left-0 right-0">
		<div class="container flex items-center ">
			<div class="max-w-3xl py-24">
				<h1 class="text-gray-200 text-4xl font-bold tracking-tight sm:text-6xl">Game Showcase</h1>
				<p class="mt-6 text-lg leading-8">
					Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
					Elit sunt amet fugiat veniam occaecat fugiat aliqua.
				</p>
				<div class="mt-10 flex items-center gap-x-6">
					<a
						href="/games"
						class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>Get Started</a
					>
					<a href="/help" class="text-sm font-semibold leading-6">Learn more </a>
				</div>
			</div>
		</div>

	</div>
</div>
