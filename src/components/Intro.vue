<template>
	<section class="intro">
		<h1 class="_title">
			{{ title }}
		</h1>

		<p v-if="subTitle" class="_subTitle">
			{{ subTitle }}
		</p>

		<g-image class="_logo" src="@/assets/svg/logo.svg" alt="Logo" width="135" height="135" />
	</section>
</template>

<script>
	export default {
		props: ["title", "subTitle"],
	}
</script>

<style lang="scss" scoped>
	@use "@/scss/mixins" as *;

	.intro {
		& > ._title,
		& > ._subTitle,
		& > ._logo {
			@include centerMargin;

			display: block;
			text-align: center;
		}

		& > ._title {
			margin-bottom: 1rem;
		}

		& > ._logo {
			@include verticalMargin(4rem);

			display: block;
			width: 250px;
			max-width: 95%;
		}
	}
</style>