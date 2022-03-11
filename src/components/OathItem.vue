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
		text-decoration: none;

		&.-collapsed {
			._content {
				@include verticalPadding(0);

				max-height: 0;
				opacity: 0;
			}
		}

		._wrapper {
			color: $text;
			background-color: $secondary;
		}

		._header,
		._content {
			display: block;
		}

		._header {
			font-size: 1.2rem;
			padding: 1rem;
		}

		._content {
			height: auto;
			max-height: 100vh;
			padding: 1.5rem;

			opacity: 1;
			cursor: default;
			border-top: 1px solid $primary;

			transition: 0.5s ease-in-out;
			transition-property: max-height, padding, opacity;
		}
	}
</style>