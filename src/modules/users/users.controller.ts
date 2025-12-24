import { Request, Response } from "express";
import { pool } from "../../config/db";
import { userServices } from "./users.service";

const createUser = async (req:Request,res:Response)=>{
  const {name, email, password, phone, role } = req.body;
  try {
    const result = await userServices.createUser(name, email, password, phone, role)
    
    res.status(201).json({
      success:true,
      message:"Users Inserted successfully",
      data: result.rows[0],
    })
    
  } catch (err:any) {
    res.status(500).json({
      success: false,
      message: err.message
    })   
  } 
}

const getUser = async(req:Request,res:Response)=>{
  try {
    const result = await userServices.getUser();

    res.status(200).json({
      success: true,
      message: "Users retrieved successfully",
      data:result.rows,
    })

  } catch (err:any) {
    res.status(500).json({
      success:false,
      message:err.message
    })
  }
}

const getSingleUser = async(req:Request,res:Response)=>{
  try {
    const result = await userServices.getSingleUser(req.params.id!)
    if(result.rows.length === 0){
      res.status(404).json({
        success: false,
        message:"User Not Found"
      })
    }else{
      res.status(200).json({
        success: true,
        message:"User Fatched Successfully",
        data: result.rows[0]
      })
    }
    
    
  } catch (err:any) {
    res.status(500).json({
      success:false ,
      message:err.message
    })
  }
} 

const updateUser = async (req: Request, res: Response) => {
  const { name, email, role, phone } = req.body;
  const { role: LoginUserRole, id: userId } = req.user!;
  const paramsId = req.params.id;

  try {
    const result = await userServices.updateUser(
      name,
      email,
      phone,
      paramsId!,
      role,
      userId,
      LoginUserRole
    );

    if (result?.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: "user not found",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "User update Successfully",
        data: result?.rows[0],
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const result = await userServices.deleteUser(req.params.id!);
    if (result.rowCount === 0) {
      res.status(404).json({
        success: false,
        message: "user not found",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "User Delete Successfully",
        data: null,
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


export const userController ={
    createUser,
    getUser,
    getSingleUser,
    updateUser,
    deleteUser

}