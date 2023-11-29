const User = require("./User");
const Properties = require("./Properties");
const Citas = require("./Citas");

User.hasMany(Citas);
Citas.belongsTo(User);
Properties.hasMany(Citas);
Citas.belongsTo(Properties);

module.exports = { User, Properties, Citas };
