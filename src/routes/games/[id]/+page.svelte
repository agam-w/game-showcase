<script lang="ts">
	import { page } from '$app/stores';
	import { getGame } from '$lib/const/games';

	let game = getGame($page.params.id);
</script>

<div class="container py-8">
	{#if game != undefined}
		<iframe
			src={game.embedUrl}
			frameborder="0"
			scrolling="no"
			title={game.id}
			class="w-full"
			height="700px"
		/>

		<div class="py-8 space-y-2">
			<p class="text-gray-200 font-semibold text-xl">{game.name}</p>
			<p class="">
				{game.description}
			</p>
		</div>
	{/if}
</div>
