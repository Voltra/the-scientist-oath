<static-query>
query {
metadata {
scientists {
id,
displayName,
website,
title,
timeFrame,
flag
}
}
}
</static-query>

<template>
	<Layout class="scientists linkList">
		<Intro
			:subTitle="description"
			:title="title"
		/>

		<div v-for="scientist in scientists" :key="scientist.id" itemscope itemtype="https://schema.org/Person">
			<span class="dont-print">
				{{ scientist.flag }}
			</span>
			<a :href="scientist.website" itemprop="name url sameAs" tabindex="0" target="_blank">
				{{ scientist.displayName }}
			</a>
			({{ scientist.timeFrame }}) | {{ scientist.title }}
			<span class="print-only">
				| {{ scientist.website }}
			</span>
		</div>
	</Layout>
</template>

<script>
	import Intro from "../components/Intro";

	export default {
		metaInfo() {
			return {
				title: this.title,
				description: this.description,
			};
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
	};
</script>
