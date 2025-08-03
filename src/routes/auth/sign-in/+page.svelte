<script lang="ts">
    import LoginCard from 'molecules/loginCard/loginCard.svelte'
    import { Header } from "organisms/header"
    import { Footer } from "organisms/footer"
</script>

<svelte:head>
	<title>Sign-in</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="w-full flex flex-1 flex-col justify-between items-center">
    <Header />
    <LoginCard redirectURL="/host/create" title="Entre com sua conta Microsoft" description="Para organizar uma sessão, faça login com sua conta microsoft" />
    <Footer />
</section>
