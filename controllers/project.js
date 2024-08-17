


const projectModel = require('../models/project');


let createProject = async (req, res , next) => {
  let newProject = req.body;
  try {
    let project = await projectModel.create(newProject);
    res.status(200).json({ message: "user project successfully", data: project });
  } catch (err) {
    next({statusCode:404})
  }

};

let getProjects = async (req, res) => {
  try {

    let projects = await projectModel.find()

    res.status(200).json(projects);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get a single project by ID
// let getProjectById = async (req, res) => {
//   try {
//     const project = await Project.findOne({ _id: req.params.id, userId: req.user._id });
//     if (!project) {
//       return res.status(404).json({ error: 'Project not found' });
//     }
//     res.status(200).json(project);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

let updateProject = async (req, res) => {
 try {
       await projectModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json({message:"Project updated successfully"} )
    }
      catch (error) {
      res.json({message:error.message})
}
};

// Delete a project
let deleteProject = async (req, res) => {
  let {id}=req.params
  try{
   let project =await projectModel.findByIdAndDelete(id)

     if(project){
       res.status(200).json({messege:"deleted success"})
     }else{
      res.status(400).json({message:"project doesn't exist"})

     }
  }
  catch(err){
      res.status(400).json({message: err.message})

  }
};

module.exports={createProject , getProjects  , updateProject , deleteProject }