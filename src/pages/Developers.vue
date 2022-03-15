<static-query>
query {
	metadata {
		developers {
			id,
			displayName,
			website,
			title,
			timeFrame
		}
	}
}
</static-query>

<template>
	<Layout class="developers linkList">
		<Intro
			title="Developers"
			subTitle="A list of developers of who took the oath and decided to show it here"
		/>

		<div v-for="dev in devs" :key="dev.id">
			<a :href="dev.website" target="_blank" tabindex="0">{{ dev.displayName }}</a> ({{ dev.timeFrame }}) | {{ dev.title }}
		</div>
	</Layout>
</template>

<script>
	import Intro from "../components/Intro";

	export default {
		metaInfo: {
			title: 'Developers'
		},
		components: {
			Intro,
		},
		computed: {
			devs() {
				return this.$static.metadata.developers;
			},
		},
	}
</script>
