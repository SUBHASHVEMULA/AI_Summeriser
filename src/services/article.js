import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const rapidApiKey=import.meta.env.VITE_RAPID_API_ARTICLE_KEY;
// 1.Created a Api
// 2.Gave it a reducer Path
// 3.Gave it a base url and set headers
// 4.Created an end point
export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
    prepareHeaders:(headers)=>{
        headers.set("X-RapidAPI-Key",rapidApiKey);
        headers.set(
          "X-RapidAPI-Host",
          "article-extractor-and-summarizer.p.rapidapi.com"
        );
        return headers;
    },
  }),
  //reduxtoolkit creates a hook out of this end point
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) =>`/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
    }),
  }),
})
export const {useLazyGetSummaryQuery} =articleApi
//This lets us fire the hook not as soon as app loads but on demand
//i.e when we hit sybmit after entering the url