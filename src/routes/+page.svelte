<script lang="ts">
  import RoleCard from "molecules/roleCard/roleCard.svelte"
  import { Button } from "atoms/button"
  import { Header } from "organisms/header"
  import { Footer } from "organisms/footer"
  import { InfoRegular } from "fluentui-icons-svelte"
  import PersonMagic from "images/person-magic.jpg"
  import PersonDialog from "images/person-dialog.jpg"
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex flex-1 flex-col items-center justify-between">
  <Header />
  <div class="flex w-fit flex-col gap-0.5 lg:gap-2">
    <div
      class="flex w-fit flex-col items-center justify-center gap-1 md:gap-3 lg:flex-row"
    >
      <RoleCard
        redirectURL="/auth/sign-in"
        pictureURL={PersonMagic}
        pictureAlt="Organizar nova sessão"
        title="Organizar sessão"
        description="Crie e compartilhe uma nuvem de palavras"
      />
      <RoleCard
        redirectURL="#"
        pictureURL={PersonDialog}
        pictureAlt="Participar de uma sessão"
        title="Participar de sessão"
        description="Acesse uma sessão em andamento por pin ou código QR"
      />
    </div>
    <div class="flex w-full justify-end">
      <Button variant="link" size="link" disabled>
        <InfoRegular class="size-1.5" />
        Sobre o projeto
      </Button>
    </div>
  </div>
  <Footer />
</section>
