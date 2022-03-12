<template>
	<div :class="classes">
		<dl class="_wrapper">
			<dt class="_header" @click="toggle">
				<span class="_title">
					{{ item.title }}

					<!-- <a :href="`#${item.slug}`" tabindex="0">
						<svg class="_anchorIcon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<title>Anchor</title>
							<path d="M13.544 10.456C12.7249 9.63723 11.6141 9.17728 10.456 9.17728C9.29784 9.17728 8.1871 9.63723 7.36799 10.456L4.27899 13.544C3.45987 14.3631 2.99969 15.4741 2.99969 16.6325C2.99969 17.7909 3.45987 18.9019 4.27899 19.721C5.09811 20.5401 6.20908 21.0003 7.36749 21.0003C8.52591 21.0003 9.63687 20.5401 10.456 19.721L12 18.177" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M10.456 13.544C11.2751 14.3628 12.3858 14.8227 13.544 14.8227C14.7021 14.8227 15.8129 14.3628 16.632 13.544L19.721 10.456C20.5401 9.63687 21.0003 8.52591 21.0003 7.36749C21.0003 6.20908 20.5401 5.09811 19.721 4.27899C18.9019 3.45987 17.7909 2.99969 16.6325 2.99969C15.4741 2.99969 14.3631 3.45987 13.544 4.27899L12 5.82299" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</a> -->
				</span>

				<svg class="_toggleIcon" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>{{ svgAlt }}</title>
					<path d="M5 6L10 11L15 6L17 7L10 14L3 7L5 6Z"/>
				</svg>
			</dt>

			<dd class="_content">
				{{ item.description }}
			</dd>
		</dl>
	</div>
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
			svgAlt() {
				return this.collapsed ? "More details" : "Less details";
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

	$transitionDuration: 0.5s;

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
				pointer-events: none;
			}

			._toggleIcon {
				transform: rotate(0deg);
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

			@include flexSpread($align: center);
			@include radiusBottom(0);

			padding: 1rem;

			font-size: 1.2rem;
			background-color: $color;
			cursor: pointer;

			transition: $transitionDuration ease-in-out;
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
			line-height: 1.3;

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

		._toggleIcon {
			flex: 0 0 1em;
			transform: rotate(180deg);

			transition: $transitionDuration ease-in-out;
			transition-property: transform;
		}

		._anchorIcon {
			height: 1em;

			&,
			path {
				fill: none;
				stroke: $secondary;
			}
		}
	}
</style>