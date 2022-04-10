<static-query>
query {
	metadata {
		siteName
		siteDescription
	}
}
</static-query>

<template>
	<Layout class="home">
		<Intro :subTitle="siteDescription" :title="siteName"/>

		<OathItems/>
	</Layout>
</template>

<script>
	import OathItems from "../components/OathItems.vue";
	import Intro from "../components/Intro.vue";

	export default {
		metaInfo() {
			return {
				title: this.siteName,
				description: this.siteDescription,
			};
		},
		components: { OathItems, Intro },
		computed: {
			siteName() {
				return this.$static.metadata.siteName;
			},
			siteDescription() {
				return this.$static.metadata.siteDescription;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.home-links a {
		margin-right: 1rem;
	}
</style>
