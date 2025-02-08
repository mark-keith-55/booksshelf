<template>
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <NuxtLink @click="changeIteState(item)" :to="`item/${name}`">
            <img class="rounded-t-lg" :src="`${imageSiteUrl}${poster_path}`" alt="Series Image" />
        </NuxtLink>
        <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {{ name }}
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                first air date: {{ first_air_date }}
            </p>
            <p v-if="overview"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {{ overview }}
            </p>
            <p v-else
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Not overview available
            </p>
        </div>
    </div>

</template>
<script setup>

defineProps(
    [
        'name',
        'overview',
        'first_air_date',
        'popularity',
        'poster_path',
        'item'
    ])

const iageSiteUrl = '';
const itemState = useState('chosenItem', () => {});
const changeItemState = (item) => {
    itemState = item;
}

</script>