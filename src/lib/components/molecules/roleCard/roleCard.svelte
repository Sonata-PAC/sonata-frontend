<script lang="ts">
  import * as Card from "atoms/card"

  interface RoleCardInterface {
    redirectURL: string
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
  }: RoleCardInterface = $props()
</script>

<a href={redirectURL}>
  <Card.Root
    class="flex h-28 w-full flex-col gap-4 shadow-lg transition-all hover:scale-105 hover:cursor-pointer hover:shadow-xl md:h-36 md:w-48"
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
  </Card.Root>
</a>
