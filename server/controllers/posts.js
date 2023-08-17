
import PostMessage from '../models/postMessage.js';
export const getPosts = async (req, res) => { 
    try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
   } catch(error){
    response.status(404).json({message: error.message});
   }  res.send("This blinder is lovely!!! The ball is insanely beautiful.")
}
 
export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  
   try{
      await newPost.save();
      res.status(201).json(newPost);

   }catch (error){
      res.status(409).json({ message: error.message});
   }
}