<template>
	<a :class="classes" :href="`#${item.slug}`" tabindex="0">
		<dl class="_wrapper">
			<dt class="_header" @click="toggle">
				{{ item.title }}
			</dt>

			<dd class="_content">
				{{ item.description }}
			</dd>
		</dl>
	</a>
</template>

<script>
	export default {
		props: ["item"],
		data() {
			return {
				collapsed: true,
			};
		},
		computed: {
			classes() {
				return {
					oathItem: true,
					"-collapsed": this.collapsed,
				};
			},
		},
		methods: {
			toggle() {
				this.collapsed = !this.collapsed;
			},
		},
	}
</script>

<style lang="scss" scoped>
	@use "@/scss/variables" as *;
	@use "@/scss/mixins" as *;

	.oathItem {
		@include centerMargin;

		display: block;
		width: 95%;
		max-width: 45ch;

		text-decoration: none;

		&.-collapsed {
			._header {
				border-radius: inherit;
			}

			._content {
				@include verticalPadding(0);

				max-height: 0;
				opacity: 0;
			}
		}

		._wrapper {
			color: $text;
			background-color: $primary;
			border-radius: $bigRadius;
		}

		._header,
		._content {
			display: block;
			border-radius: inherit;
		}

		._header {
			$color: $primary;

			@include radiusBottom(0);

			padding: 1rem;

			font-size: 1.2rem;
			background-color: $color;

			transition: 0.5s ease-in-out;
			transition-property: max-height, padding, opacity, border-radius;

			&::selection {
				color: $color;
				background-color: $text;
			}
		}

		._content {
			$color: $secondary;

			@include radiusTop(0);

			height: auto;
			max-height: 100vh;
			padding: 1.5rem;

			background-color: $color;
			opacity: 1;
			cursor: default;
			border-top: 1px solid $background;

			transition: 0.5s ease-in-out;
			transition-property: max-height, padding, opacity, border-radius;

			&::selection {
				color: $color;
				background-color: $text;
			}
		}
	}
</style>