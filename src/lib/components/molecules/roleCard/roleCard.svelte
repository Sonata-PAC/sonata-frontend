<script lang="ts">
    import * as Card from 'atoms/card'

    interface RoleCardInterface {
        redirectURL: string
        pictureURL?: string
        pictureAlt?: string
        title: string
        description: string
    }

    const { redirectURL, pictureURL, pictureAlt, title, description }: RoleCardInterface = $props()
</script>

<a href={redirectURL}>
    <Card.Root class="w-full md:w-48 h-28 md:h-36 flex flex-col gap-4 shadow-lg transition-all hover:scale-105 hover:shadow-xl hover:cursor-pointer">
        <Card.Header class="flex flex-col justify-center items-center px-4">
            {#if pictureURL}<img src={pictureURL} alt={pictureAlt} class="w-6 h-6" />{/if}
            <Card.Title class="prose-2xl">{ title }</Card.Title>
        </Card.Header>
        <Card.Content class="flex justify-center items-center px-4">
            <Card.Description class="text-center">
                { description }
            </Card.Description>
        </Card.Content>
    </Card.Root>
</a>
