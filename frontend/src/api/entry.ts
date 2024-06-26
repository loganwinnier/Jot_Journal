import { apiSlice } from "./apiSlice";

/** Slice for entry and prompt endpoints */
export const entryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createEntry: builder.mutation({
      query: (content) => ({
        url: "/entries/",
        method: "POST",
        body: { ...content },
      }),
    }),
    deleteEntry: builder.mutation({
      query: (entryId) => ({
        url: `/entries/${entryId}`,
        method: "DELETE",
      }),
    }),
    editEntry: builder.mutation({
      query: ({ content, entryId }) => ({
        url: `/entries/${entryId}`,
        method: "PATCH",
        body: content,
      }),
    }),
    getAllEntries: builder.query({
      query: () => ({
        url: `/entries`,
      }),
    }),
    getEntry: builder.query({
      query: (entryId) => ({
        url: `/entries/${entryId}`,
      }),
    }),
    generatePrompt: builder.mutation({
      query: (content: string) => ({
        url: "/prompts",
        method: "POST",
        body: { prompt: content },
      }),
    }),
  }),
});

export const {
  useCreateEntryMutation,
  useDeleteEntryMutation,
  useEditEntryMutation,
  useGetAllEntriesQuery,
  useGetEntryQuery,
  useGeneratePromptMutation,
} = entryApi;
