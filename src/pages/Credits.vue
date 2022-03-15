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
	<Layout class="credits linkList">
		<Intro title="Credits" sub-title="Credit where credit is due"/>

		<div class="_item" v-for="attribution in attributions" :key="attribution.for">
			<a :href="attribution.url" target="_blank" tabindex="0">{{ attribution.for }}</a> by {{ attribution.name }}
		</div>
	</Layout>
</template>

<script>
import Intro from "../components/Intro";

export default {
	metaInfo: {
		title: 'Credits'
	},
	components: {
		Intro,
	},
	computed: {
		attributions() {
			return this.$static.metadata.attributions;
		},
	},
}
</script>
