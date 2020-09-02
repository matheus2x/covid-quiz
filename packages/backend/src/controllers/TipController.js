const Tip = require("../models/Tip");

const NODE_PORT = process.env.NODE_PORT;

module.exports = {
  async index(req, res) {
    const tips = await Tip.findAll();

    const serializedTips = tips.map((tip) => {
      return {
        id: tip.id,
        text: tip.text,
        image_url: `http://localhost:${NODE_PORT}/uploads/${tip.image}`,
      };
    });

    return res.json(serializedTips);
  },
};
