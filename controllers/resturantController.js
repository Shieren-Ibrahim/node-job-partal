const resturantModel = require("../models/resturantModel");

//CREATE RESTURANT
const createResturantController=async(req,res)=>{
    try {
        const {title,
            imageUrl,
            foods,
            time,
            pickup,
            delivery,
            isOpen,
            logoUrl,
            rating,
            ratingCount,
            code,coords
        }=req.body
            //validation
            if(!title || !coords){
                return res.status(500).send({
                    success:false,
                    message:'Please Provide title and address'
                })
            }
            const newResturant=new resturantModel({title,
                imageUrl,
                foods,
                time,
                pickup,
                delivery,
                isOpen,
                logoUrl,
                rating,
                ratingCount,
                code,coords})
            await newResturant.save()
            res.status(201).send({
                success:true,
                message:'New Resturant Created Successfully'
            })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error In Create Resturant api',
            error
        })
    }
};

//GET ALL RESTURANT
const getAllResturantController=async(req,res)=>{
    try {
        const resturants=await resturantModel.find({})
        if(!resturants){
            return res.status(404).send({
                success:false,
                message:'No Restturant Avalible'
            })
        }
        res.status(200).send({
            success:true,
            totalCount:resturants.length,
            resturants
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in Get All Resturant API ',
            error
        })
    }
}

//GET RESTURANT BY ID
const getResturantByIdController=async(req,res)=>{
    try {
        const resturantId=req.params.id
        console.log(resturantId,'jjjjjjjjjjj')
        if(!resturantId){
            return res.status(404).send({
                success:false,
                message:'Pleae provide Resturant ID'
            })
        }
        //find resturant 
        const restaurant=await resturantModel.findById(resturantId)
        if(!restaurant){
            return res.status(404).send({
                success:false,
                message:'no resturany found'
            })
        }
        res.status(200).send({
            success:true,
            restaurant
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in GET RESTURANT BY ID API',
            error
        })
    }
}

//DELETE RESTRURNAT
const deleteResturantController = async (req, res) => {
  try {
    const resturantId = req.params.id;
    if (!resturantId) {
      return res.status(404).send({
        success: false,
        message: "No Resturant Found OR Provide Resturant ID",
      });
    }
    await resturantModel.findByIdAndDelete(resturantId);
    res.status(200).send({
      success: true,
      message: "Resturant Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Eror in delete resturant api",
      error,
    });
  }
};

module.exports={
    createResturantController,
    getAllResturantController,
    getResturantByIdController,
    deleteResturantController,
};
