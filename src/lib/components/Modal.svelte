<script lang="ts">
	interface Props {
		children: import('svelte').Snippet;
		open: boolean;
		title?: string;
		onclose?: () => void;
	}
	let { children, open, title, onclose }: Props = $props();

	let dialogEl = $state<HTMLDivElement>();
	let previousFocus = $state<HTMLElement | null>(null);

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape' && onclose) onclose();
		if (e.key === 'Tab' && dialogEl) {
			const focusable = dialogEl.querySelectorAll<HTMLElement>(
				'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
			);
			const first = focusable[0];
			const last = focusable[focusable.length - 1];
			if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
			else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
		}
	}

	function handleBackdropClick(e: MouseEvent) {
		if ((e.target as HTMLElement).dataset?.backdrop && onclose) onclose();
	}

	$effect(() => {
		if (open) {
			previousFocus = document.activeElement as HTMLElement;
			requestAnimationFrame(() => {
				dialogEl?.querySelector<HTMLElement>('button, [href], input')?.focus();
			});
		} else if (previousFocus) {
			previousFocus?.focus();
			previousFocus = null;
		}
	});
</script>

{#if open}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center p-4"
		role="dialog"
		aria-modal="true"
		aria-label={title || 'Dialog'}
		bind:this={dialogEl}
		data-backdrop="true"
		onclick={handleBackdropClick}
		onkeydown={handleKeydown}
	>
		<div class="fixed inset-0 bg-black/50 transition-opacity" data-backdrop="true"></div>
		<!-- svelte-ignore a11y_no_non_element_tabindex -->
		<div class="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-xl border border-border bg-card shadow-xl" tabindex="-1">
			{#if title}
				<div class="flex items-center justify-between border-b border-border px-6 py-4">
					<h3 class="text-lg font-semibold text-foreground">{title}</h3>
					<button onclick={onclose} class="rounded-lg p-3 transition-colors hover:bg-muted" aria-label="Close dialog">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
					</button>
				</div>
			{/if}
			<div class="p-6">
				{@render children()}
			</div>
		</div>
	</div>
{/if}
