const apiUrl = process.env.API_URL || "https://api.potterdb.com";

export const getBySlug = async (type, slug) => {
  return fetch(`${apiUrl}/v1/${type}/${slug}`)
    .then((res) => res.json())
    .catch((error) => {
      return {
        errors: {
          error,
        },
      };
    });
};

const defaultQuery = {
  page: 1,
  pageSize: 25,
  search: "",
  sort: "",
  direction: "asc",
};
export const getAll = async (type, query = defaultQuery) => {
  const { page, pageSize, search, sort, direction } = query;

  const pagination = `page[number]=${page}`;
  const perPage = `page[size]=${pageSize}`;
  const searchFilter = `filter[name_cont_any]=${search}`;
  const sorting = `sort=${direction === "desc" ? "-" : ""}${sort}`;

  return fetch(
    `${apiUrl}/v1/${type}?${pagination}&${perPage}&${searchFilter}&${sorting}`
  )
    .then((res) => res.json())
    .catch((error) => {
      return {
        errors: {
          error,
        },
      };
    });
};
