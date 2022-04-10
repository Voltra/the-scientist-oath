<static-query>
query {
	metadata {
		oathItems {
			slug
			title
			description
		}
	}
}
</static-query>

<template>
	<section>
		<ul class="oathItems">
			<li v-for="item in oathItems" :id="item.slug" :key="item.slug" class="_item">
				<OathItem :item="item"/>
			</li>
		</ul>
	</section>
</template>

<script>
	import OathItem from "./OathItem.vue";

	export default {
		components: { OathItem },
		computed: {
			oathItems() {
				return this.$static.metadata.oathItems;
			},
		},
	};
</script>

<style lang="scss" scoped>
	@use "@/scss/mixins" as *;

	.oathItems {

		@include verticalMargin(1rem);

		list-style-type: none;

		._item {
			margin-bottom: 2rem;
		}
	}
</style>
