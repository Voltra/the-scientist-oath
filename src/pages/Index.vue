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
		<Intro :title="siteName" :subTitle="siteDescription"/>

		<OathItems />
	</Layout>
</template>

<script>
import OathItems from "../components/OathItems.vue";
import Intro from "../components/Intro.vue";
export default {
	metaInfo() {
		return this.$seo({
			title: this.siteName,
			description: this.siteDescription,
		});
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
}
</script>

<style lang="scss">
@use "@/scss/mixins" as *;

.home-links a {
	margin-right: 1rem;
}
</style>
