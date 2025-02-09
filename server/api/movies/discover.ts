export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const TMDB_ACCESS_TOKEN = config.TMDB_ACCESS_TOKEN; // ✅ 正しい取得方法に変更

    if (!TMDB_ACCESS_TOKEN) {
        console.error("Missing TMDB_ACCESS_TOKEN");
        throw createError({ statusCode: 500, statusMessage: "Server misconfiguration: Missing API token" });
    }

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${TMDB_ACCESS_TOKEN}` // ✅ 修正
        }
    } as const;

    try {
        const movies = await $fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options);
        const series = await $fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc', options);

        return { movies, series };
    } catch (error) {
        console.error("API Fetch Error:", error);
        throw createError({ statusCode: 500, statusMessage: "Failed to fetch data from TMDB" });
    }
});



    


    // const options = {
    //     method: 'GET',
    //     headers: {
    //       accept: 'application/json',
    //       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDI2YjQxZDUzNmM4OThlMjAzNjlhODdiN2E3OWZhYiIsIm5iZiI6MTczODk4NTAwNy45OTMsInN1YiI6IjY3YTZjZTJmODlmMDVlMTYxOWYxMDIyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M919ZIpK-auQOgaYoxv_paw6-fnjy2Md3Ql0MjTugUg'
    //     }
    //   };
      
    //   const movies = fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
    //     .then(res => res.json())
    //     .then(res => console.log(res))
    //     .catch(err => console.error(err));

    //   const series = fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
    //     .then(res => res.json())
    //     .then(res => console.log(res))
    //     .catch(err => console.error(err));
