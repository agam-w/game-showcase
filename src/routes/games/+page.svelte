<script>
	import { base } from '$app/paths';
	import { games } from '$lib/const/games';
</script>

<div class="container py-8">
	<h1 class="font-semibold text-2xl text-gray-200">Games</h1>

	<div class="grid grid-cols-4 gap-8 py-8">
		{#each games as game}
			<a href="{base}/games/{game.id}" class="group card">
				<div class="cover">
					<img class="image" src={game.coverUrl} alt="cover {game.name}" />
				</div>
				<p class="group-hover:text-gray-200 font-medium transition">{game.name}</p>
			</a>
		{/each}
	</div>
</div>

<style lang="scss">
	.card {
		@apply space-y-2 cursor-pointer transition;
		.cover {
			@apply bg-gray-500 h-[200px] rounded-xl overflow-clip;
			.image {
				@apply bg-gray-500 object-cover object-center hover:scale-125 transition duration-500;
			}
		}
	}
</style>
