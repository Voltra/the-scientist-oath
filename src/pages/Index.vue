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
	<h1 class="_title">{{ siteName }}</h1>
	<p class="_subTitle">{{ siteDescription }}</p>
	<!-- Learn how to use images here: https://gridsome.org/docs/images -->
	<g-image alt="Example image" src="/logo.svg" width="135" height="135" />

	<section>
		<OathItems/>
	</section>
  </Layout>
</template>

<script>
import OathItems from "../components/OathItems.vue";
export default {
    metaInfo() {
        return {
            title: this.siteName,
            description: this.siteDescription,
        };
    },
    components: { OathItems },
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

	.home {
		& > ._title,
		& > ._subTitle {
			@include centerMargin;
			text-align: center;
		}

		& > ._title {
			margin-bottom: 1rem;
		}
	}

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
