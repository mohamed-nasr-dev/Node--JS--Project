const proposals = require("../models/proposals");

let showProposals = async (req, res) => {
  try {
    let users = await proposals.find();
    res.status(200).json({ message: "success", users });
  } catch (err) {
    res.status(404).json(err);
  }
};

let saveProposal = async (req, res) => {
  let newProposal = req.body;
  try {
    let savedUser = await proposals.create(newProposal);
    res
      .status(200)
      .json({ message: "proposal saved successfully", data: savedUser });
  } catch (err) {
    res.status(404).json(err.message);
  }
};
let updateProposalById = async (req, res) => {

  try {
    let updateProposal = await proposals.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: "Proposal updated successfully" });

  } catch (error) {
    res.json({ message: error.message });
  }
};

let deleteProposal = async (req, res) => {
  let { id } = req.params;
  try {
    let Proposal = await proposals.findByIdAndDelete(id);

    if (Proposal) {
      res.status(200).json({ messege: "success" });
    } else {
      res.status(400).json({ message: "Proposal doesn't exist" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  showProposals,
  saveProposal,
  deleteProposal,
  updateProposalById,
};
