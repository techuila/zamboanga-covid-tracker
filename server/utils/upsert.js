module.exports = async (Model, values, options, callback) => {
  return await Model.findOne({ where: { id: values.id || -1 } }).then(
    async function (obj) {
      let result,
        params = {};

      if (!options) options = {};

      if (obj) {
        // update
        const { id, ...payload } = values;
        const rev_status = obj.get({ plain: true }).status;
        const new_status = values.status;

        params = { rev_status, new_status };

        result = await obj.update(payload, {
          individualHooks: true,
          ...options,
        });
      } else {
        // insert
        const { id, ...payload } = values;

        result = await Model.create(payload, { ...options });
      }

      if (callback) await callback(params);

      return result;
    }
  );
};
