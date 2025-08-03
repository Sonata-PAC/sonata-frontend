<script lang="ts">
    interface IconInterface {
        children: unknown
        size: 'sm' | 'md' | 'lg'
        shape: 'circle' | 'square'
        hoverable?: boolean
        disabled?: boolean
    }

    const sizeClasses = {
        sm: 'w-6 h-6 text-sm',
        md: 'w-8 h-8 text-base',
        lg: 'w-10 h-10 text-lg',
    }

    const shapeClasses = {
        circle: 'rounded-full',
        rounded: 'rounded-md',
        square: 'rounded-none',
    }

  const { children, size, shape, hoverable, disabled }: IconInterface = $props()
</script>

<div class={`inline-flex items-center justify-center
          ${sizeClasses[size]}
          ${shapeClasses[shape]}
          ${hoverable && !disabled ? 'hover:bg-opacity-75 cursor-pointer' : ''}
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
    {@render children()}
</div>
