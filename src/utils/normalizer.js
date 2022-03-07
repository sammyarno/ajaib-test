const normalizer = rawData => {
  const result = {
    data: [],
    meta: {},
  };

  if (rawData.info) {
    result.meta = {
      page: rawData.info.page,
      results: rawData.info.results,
    };
  }

  if (rawData.results) {
    result.data = rawData.results.map(result => ({
      id: result.login.uuid,
      name: `${result.name.first} ${result.name.last}`,
      email: result.email,
      username: result.login.username,
      registeredData: result.registered.date,
      gender: result.gender,
    }))
  }

  return result;
};

export default normalizer;
