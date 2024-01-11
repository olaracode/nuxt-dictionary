export default defineEventHandler(async (event) => {
  const searchParam = getRouterParam(event, "dictionary");

  try {
    const word = await $fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${
        searchParam !== "undefined" ? searchParam : "dictionary"
      }`
    );
    return { word };
  } catch (error) {
    return error;
  }
});
