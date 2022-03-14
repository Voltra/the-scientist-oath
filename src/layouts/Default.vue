<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">
			<g-image class="_logo" src="@/assets/svg/logo.svg" :alt="logoAlt" width="80" height="80" />
		</g-link>
      </strong>

      <nav class="nav">
        <g-link class="nav__link" to="/credits">Credits</g-link>
        <g-link class="nav__link" to="/about">About</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<script>
	export default {
		computed: {
			logoAlt() {
				return `${this.$static.metadata.siteName} logo`;
			},
		},
	}
</script>

<style lang="scss">
@import "@/scss/main.scss";

body {
  margin:0;
  padding:0;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  height: 80px;

  ._logo {
	  height: 80px;
  }
}

.nav__link {
  margin-left: 20px;
}
</style>
