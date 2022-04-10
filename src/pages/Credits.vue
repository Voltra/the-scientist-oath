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
		<Intro sub-title="Credit where credit is due" title="Credits"/>

		<div v-for="attribution in attributions" :key="attribution.for" class="_item">
			<a :href="attribution.url" tabindex="0" target="_blank">{{ attribution.for }}</a>
			by {{ attribution.name }}
		</div>
	</Layout>
</template>

<script>
	import Intro from "../components/Intro";

	export default {
		metaInfo:{
			title: "Credits",
		},
		components: {
			Intro,
		},
		computed: {
			attributions() {
				return this.$static.metadata.attributions;
			},
		},
	};
</script>
