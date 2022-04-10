<static-query>
query {
metadata {
siteName
}
}
</static-query>

<template>
	<div class="layout" itemscope itemtype="https://schema.org/WebPage">
		<header class="header dont-print">
			<strong>
				<g-link itemprop="relatedLink significantLink" to="/">
					<g-image :alt="logoAlt" class="_logo" height="80" src="@/assets/svg/logo.svg" width="80"/>
				</g-link>
			</strong>

			<nav class="nav">
				<g-link class="nav__link" itemprop="relatedLink significantLink" to="/scientists">
					Scientists
				</g-link>
				<g-link class="nav__link" itemprop="relatedLink significantLink" to="/credits">
					Credits
				</g-link>
				<g-link class="nav__link" itemprop="relatedLink significantLink" to="/why">
					Why
				</g-link>
			</nav>
		</header>

		<main>
			<slot/>
		</main>
	</div>
</template>

<script>
	export default {
		computed: {
			logoAlt() {
				return `${this.$static.metadata.siteName} logo`;
			},
		},
	};
</script>

<style lang="scss">
	@import "~@/scss/main.scss";

	.layout {
		max-width: 760px;
		margin: 0 auto;
		padding-left: 20px;
		padding-right: 20px;
	}

	.header {
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 20px;
		margin-bottom: 20px;
		width: 100%;
		height: 80px;

		._logo {
			height: 80px;
		}
	}

	.nav__link {
		margin-left: 20px;
	}
</style>
