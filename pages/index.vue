<template>
    <div>
        <section>
            <h1 class="text-3xl font-extrabold dark:text-white">Featured Movies</h1>
            <ul class="grid md:grid-cols-4">
                <li v-for="mov in movies" :key="mov.id">
                    <MovieCard :movie="mov" />
                </li>
            </ul>
        </section>

        <section>
            <h1 class="text-3xl font-extrabold dark:text-white">Featured TV Series</h1>
            <ul class="grid md:grid-cols-4">
                <li v-for="ser in series" :key="ser.id">
                    <SeriesCard :series="ser" />
                </li>
            </ul>
        </section>
    </div>
</template>

<script setup>
import MovieCard from '@components/MovieCard.vue';
import SeriesCard from '@components/SeriesCard.vue';

const movies = useState(() => []);
const series = useState(() => []);

// データのフェッチ
const { data } = await useFetch('/api/movies/discover', { key: 'movies-discover' });

if (!data.value) {
    console.warn("Data is undefined. Fetching on client side might be needed.");
}

movies.value = data.value?.movies?.results || [];
series.value = data.value?.series?.results || [];

console.log('Movies:', movies.value);
console.log('Series:', series.value);
</script>
