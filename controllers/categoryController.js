import slugify from "slugify"
import categoryModel from "../config/models/categoryModel.js"


export const createCategoryController= async(req,res)=>{

try{
   const {name}=req.body

   if(!name){
     return res.status(401).send({message:'Name is Required'})
   }
  const existingCategory=await categoryModel.findOne({name}) 

   if(existingCategory){
    return res.status(200).send({
        success:true,
        message:'category Already Exists'
    })
   }
    const category =await new categoryModel({name,slug:slugify(name)}).save()
     res.status(201).send({
        success:true,
        message:'New Category Created',
        category
     })
}catch(error){
    console.log(error)
    res.status(500).send({
        success:false,
        error,
        message:'error in category'
    })
}

};


export const updateCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    
    // Update category in the database
    const category = await categoryModel.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
    );
    
    // Send success response
    res.status(200).json({
      success: true,
      message: 'Category Updated Successfully',
      category,
    });
  } catch (error) {
    console.log(error);
    
    // Send error response
    res.status(500).json({
      success: false,
      message: 'Error While updating category',
      error,
    });
  }
};


export const categoryController=async(req,res)=>{
try {
    const category =await categoryModel.find({});
    res.status(200).send({
        success:true,
        message:"All Categories list",
        category,
    })
} catch (error) {
    console.log(error)
    res.status(500).send({
        success:false,
        error,
        message:'Error while getting all categories'
    })
}

}


//singleCategoryController

export const singleCategoryController=async(req,res)=>{
    try {

        // const {slug}=req.body
        const category =await categoryModel.findOne({slug:req.params.slug});
        res.status(200).send({
            success:true,
            message:"get single category",
            category,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Error while getting single category'
        })
    }
}

export const deleteCategoryController=async(req,res)=>{

try {
    
    const { id } = req.params;
    
    // Update category in the database
    const category = await categoryModel.findByIdAndDelete(id)
    
    // Send success response
    res.status(200).json({
      success: true,
      message: 'Category Deleted Successfully',
      category,
    });
  } catch (error) {
    console.log(error);
    
    // Send error response
    res.status(500).json({
      success: false,
      message: 'Error While Deleting category',
      error,
    });
  }
};