<script lang="ts">
	const links = [
		{ path: '/', name: 'Home' },
		{ path: '/games', name: 'Games' }
	];

	let isShowMobileMenu = false;
</script>

<header class="">
	<nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
		<div class="flex lg:flex-1">
			<a href="/" class="flex space-x-2 text-white text-xl font-semibold items-center">
				<svg
					width="24px"
					height="24px"
					viewBox="0 0 15 15"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M0 5.5C0 3.567 1.567 2 3.5 2H11.5C13.433 2 15 3.567 15 5.5V10.0279C15 11.6693 13.6693 13 12.0279 13C10.9021 13 9.87296 12.364 9.3695 11.357L9.19098 11H5.80902L5.6305 11.357C5.12704 12.364 4.0979 13 2.97214 13C1.33067 13 0 11.6693 0 10.0279V5.5ZM4 8V7H3V6H4V5H5V6H6V7H5V8H4ZM10 8H9V7H10V8ZM11 6H12V5H11V6Z"
						fill="currentColor"
					/>
				</svg>
				<p>Game Showcase</p>
			</a>
		</div>
		<div class="flex lg:hidden">
			<button
				on:click={() => (isShowMobileMenu = true)}
				type="button"
				class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
			>
				<span class="sr-only">Open main menu</span>
				<svg
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</button>
		</div>
		<div class="hidden lg:flex lg:gap-x-12">
			{#each links as link}
				<a href={link.path} class="text-sm font-semibold leading-6">{link.name}</a>
			{/each}
		</div>
		<div class="hidden lg:flex lg:flex-1 lg:justify-end" />
	</nav>
	<!-- Mobile menu, show/hide based on menu open state. -->
	<div class="{isShowMobileMenu ? '' : 'hidden'} lg:hidden" role="dialog" aria-modal="true">
		<!-- Background backdrop, show/hide based on slide-over state. -->
		<div class="fixed inset-0 z-50" />
		<div
			class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-zinc-900 border-l border-l-gray-500/10 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
		>
			<div class="flex items-center justify-between">
				<div class="flex-1" />
				<button
					on:click={() => (isShowMobileMenu = false)}
					type="button"
					class="-m-2.5 rounded-md p-2.5"
				>
					<span class="sr-only">Close menu</span>
					<svg
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			<div class="mt-6 flow-root">
				<div class="-my-6 divide-y divide-gray-500/10">
					<div class="space-y-2 py-6">
						{#each links as link}
							<a
								href={link.path}
								class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50/10"
								>{link.name}</a
							>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</header>
