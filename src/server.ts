import express, { Request, Response } from "express"

import config from "./config";
import initDB, { pool } from "./config/db";
import { userRoutes } from "./modules/users/users.route";




const app = express()
const port = config.port;

// parser
app.use(express.json())





initDB();

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World! hai ')
})

app.use("/users",userRoutes)

app.get("/users",)

// app.get("/users/:id",);

// app.put("/users/:id", async (req: Request, res: Response) => {
//   const { name, email, phone, role } = req.body;
//   const { role: LoginUserRole, id: userId } = req.user!;
//   const paramsId = req.params.id;

//   try {
//     let result;

//     // 🟢 CUSTOMER logic (same as service)
//     if (LoginUserRole === "customer") {
//       if (Number(userId) === Number(paramsId)) {
//         result = await pool.query(
//           `UPDATE users
//            SET name = $1, email = $2, phone = $3
//            WHERE id = $4
//            RETURNING *`,
//           [name, email, phone, paramsId]
//         );
//       } else {
//         return res.status(403).json({
//           success: false,
//           message: "Unauthorized to update other users",
//         });
//       }
//     }

//     // 🔵 ADMIN logic (same as service)
//     else if (LoginUserRole === "admin") {
//       result = await pool.query(
//         `UPDATE users
//          SET name = $1, email = $2, phone = $3, role = $4
//          WHERE id = $5
//          RETURNING *`,
//         [name, email, phone, role, paramsId]
//       );
//     }

//     // ❌ Invalid role
//     else {
//       return res.status(403).json({
//         success: false,
//         message: "Invalid user role",
//       });
//     }

//     // ❌ User not found (same as controller)
//     if (!result || result.rows.length === 0) {
//       return res.status(404).json({
//         success: false,
//         message: "user not found",
//       });
//     }

//     // ✅ Success response (same as controller)
//     res.status(200).json({
//       success: true,
//       message: "User update Successfully",
//       data: result.rows[0],
//     });
//   } catch (error: any) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
