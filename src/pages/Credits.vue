<static-query>
	query {
		metadata {
			attributions {
				for,
				url,
				name
			}
		}
	}
</static-query>

<template>
	<Layout>
		<div v-for="attribution in attributions" :key="attribution.for">
			<a :href="attribution.url" target="_blank" tabindex="0">{{ attribution.for }}</a> by {{ attribution.name }}
		</div>
	</Layout>
</template>

<script>
export default {
	metaInfo: {
		title: 'Hello, world!'
	},
	computed: {
		attributions() {
			return this.$static.metadata.attributions;
		},
	},
}
</script>