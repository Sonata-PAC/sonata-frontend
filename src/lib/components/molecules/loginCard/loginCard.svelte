<script lang="ts">
    import * as Card from 'atoms/card'
    import {cn} from "$lib/utils";
    import {Button} from "atoms/button";

    interface LoginCardInterface {
        redirectURL?: string
        pictureURL?: string
        pictureAlt?: string
        title: string
        description: string
    }

    const { redirectURL, pictureURL, pictureAlt, title, description }: LoginCardInterface = $props()
</script>

<a href={redirectURL}>
    <Card.Root class="w-32 h-36 md:w-48 md:h-64 flex flex-col justify-between shadow-lg transition-all cursor-default">
        <Card.Header class="flex flex-col justify-center items-center px-4">
            {#if pictureURL}<img src={pictureURL} alt={pictureAlt} class="w-6 h-6" />{/if}
            <Card.Title class="prose-2xl">{ title }</Card.Title>
        </Card.Header>
        <Card.Content class="flex justify-center items-center px-4">
            <Card.Description class="text-center">
                {description}
            </Card.Description>
        </Card.Content>
        <Card.Footer class="flex flex-col justify-center items-end px-4">
            <Button href={redirectURL}>Confirmar</Button>
        </Card.Footer>
    </Card.Root>
</a>
