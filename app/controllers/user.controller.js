exports.allAccess = (req, res) => {
  res.status(200).send("Public Content goes here.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content goes here.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content goes here.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content goes here.");
};
