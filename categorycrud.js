const Category = require('../../module/Category')
exports.getAllCategory = async function (req, res) {
  try {
    const docs = await Category
      .find({})
      .lean()
      .exec()

    res.status(200).json({ data: docs })
  } catch (e) {
    //console.error(e)
    res.status(400).end()
  }
}
