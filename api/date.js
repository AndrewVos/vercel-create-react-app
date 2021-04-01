import { format } from "date-fns";

module.exports = (req, res) => {
  res.json({
    body: format(new Date(), "'Today is a' eeee"),
  });
};
