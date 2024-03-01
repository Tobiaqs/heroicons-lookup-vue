# heroicons-lookup-vue

A TypeScript-typed utility you can use to lookup Heroicons Vue components by name.


## Installation
```bash
$ npm install heroicons-lookup-vue
```

## Usage
```vue
<template>
    <component :is="getHeroicon('outline24', 'PlusIcon')" class="h-5 w-5" />
    <component :is="getHeroicon('solid24', 'PlusIcon')" class="h-5 w-5" />
    <component :is="getHeroicon('solid20', 'PlusIcon')" class="h-5 w-5" />
    <component :is="getHeroicon('solid16', 'PlusIcon')" class="h-5 w-5" />
</template>

<script lang="ts" setup>
import { getHeroicon } from 'heroicons-lookup-vue'
</script>
```
