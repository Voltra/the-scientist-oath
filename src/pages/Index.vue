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
}
</script>

<style lang="scss">
@use "@/scss/mixins" as *;

.home-links a {
	margin-right: 1rem;
}

img {
	display: block;
	width: 250px;
	max-width: 95%;
	margin: 0 auto;
}
</style>
