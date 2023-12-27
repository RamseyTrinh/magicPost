import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import SelectAdd from "../../Funtions/SelectAdd/SelectAdd.jsx";
import SelectTransaction from "../../Funtions/SelectArea/SelectTransaction.jsx";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { useAuthUser } from "react-auth-kit";

import "../../../Assets/Styles/CreateAcc/CreateAcc.css";

export default function CreateAccount() {
  const auth = useAuthUser();
  const user = auth()?.data;

  type FormValues = {
    name: string;
    phoneNumber: string;
    address: string;
    specificAdd: string;
    dob: string;
    email: string;
    transactionPoint: string;
  };

  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        width: "100%",
      }}
    >
      <Paper
        sx={{
          height: "750px",
          width: "800px",
          padding: 2,
          backgroundColor: "#faf6ed",
        }}
        id="CreateAccMain"
      >
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "30px",
            color: "#003e29",
            mb: 1,
          }}
        >
          TẠO TÀI KHOẢN
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack direction="column">
            <Paper sx={{ height: "590px", padding: 3, background: "#fdfdfd" }}>
              <Stack direction="row" spacing={2} sx={{ mb: 5 }}>
                <TextField
                  id="outlined-basic"
                  label="Họ và tên"
                  variant="outlined"
                  fullWidth
                  required
                  {...register("name")}
                />
                <TextField
                  id="outlined-basic"
                  label="Số điện thoại"
                  variant="outlined"
                  fullWidth
                  required
                  {...register("phoneNumber")}
                />
              </Stack>
              <SelectAdd refs={{ ...register("address") }} />
              <TextField
                id="outlined-basic"
                label="Địa chỉ"
                variant="outlined"
                fullWidth
                required
                sx={{ mb: 3 }}
                {...register("specificAdd")}
              />
              <Stack direction="row" spacing={2} sx={{ mb: 5 }}>
                <TextField
                  label="Ngày sinh"
                  InputLabelProps={{ shrink: true }}
                  type="date"
                  {...register("dob")}
                  sx={{ width: "250px" }}
                />
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  required
                  sx={{ mb: 3 }}
                  {...register("email")}
                />
              </Stack>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Điểm giao dịch"
                InputProps={{ readOnly: true }}
                variant="outlined"
                value={user.location}
                required
                {...register("transactionPoint")}
              ></TextField>
            </Paper>
            <Button
              variant="contained"
              type="submit"
              style={{
                fontWeight: "bold",
                background: "#003e29",
                width: "150px",
              }}
              sx={{ mt: 3, ml: "auto", mr: "auto" }}
            >
              TẠO
            </Button>
          </Stack>
        </form>
      </Paper>
    </div>
  );
}
