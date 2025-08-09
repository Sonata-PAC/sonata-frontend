<script lang="ts">
  import * as Card from "atoms/card"
  import { Button } from "atoms/button"

  interface LoginCardInterface {
    redirectURL?: string
    pictureURL?: string
    pictureAlt?: string
    title: string
    description: string
  }

  const {
    redirectURL,
    pictureURL,
    pictureAlt,
    title,
    description,
  }: LoginCardInterface = $props()
</script>

<a href={redirectURL}>
  <Card.Root
    class="flex h-36 w-32 cursor-default flex-col justify-between shadow-lg transition-all md:h-64 md:w-48"
  >
    <Card.Header class="flex flex-col items-center justify-center px-4">
      {#if pictureURL}<img
          src={pictureURL}
          alt={pictureAlt}
          class="h-6 w-6"
        />{/if}
      <Card.Title class="prose-2xl">{title}</Card.Title>
    </Card.Header>
    <Card.Content class="flex items-center justify-center px-4">
      <Card.Description class="text-center">
        {description}
      </Card.Description>
    </Card.Content>
    <Card.Footer class="flex flex-col items-end justify-center px-4">
      <Button href={redirectURL}>Confirmar</Button>
    </Card.Footer>
  </Card.Root>
</a>
