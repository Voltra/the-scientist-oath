<static-query>
query {
	metadata {
		scientists {
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
	<Layout class="scientists linkList">
		<Intro
			:title="title"
			:subTitle="description"
		/>

		<div v-for="scientist in scientists" :key="scientist.id">
			<a :href="scientist.website" target="_blank" tabindex="0">{{ scientist.displayName }}</a> ({{ scientist.timeFrame }}) | {{ scientist.title }}
		</div>
	</Layout>
</template>

<script>
	import Intro from "../components/Intro";

	export default {
		metaInfo() {
			return this.$seo({
				title: this.title,
				description: this.description,
			});
		},
		components: {
			Intro,
		},
		data() {
			return {
				title: "Scientists",
				description: "A list of scientists who took the oath and decided to show it here",
			};
		},
		computed: {
			scientists() {
				return this.$static.metadata.scientists;
			},
		},
	}
</script>
