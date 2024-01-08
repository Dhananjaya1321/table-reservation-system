import {TextField} from "@mui/material";
import React, {useState} from "react";
import Button from "@mui/material/Button";
import {Link, useNavigate} from "react-router-dom";
import {api} from "../../config/config";

export function SignIn() {
    let navigate = useNavigate();

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let handleEmailChange = (event: any) => {
        setEmail(event.target.value);
    };

    let handlePasswordChange = (event: any) => {
        setPassword(event.target.value);
    };

    let handleSubmit =async () => {
        try {
            api.post("/users/search/user",{
                email:email
            }).then((res) => {
                if (res.status==200 && res.data.length==1){
                    if (password==res.data[0].password){
                        let path=(res.data[0].role=='user')?"/":"/admin/dashboard";
                        navigate(path);
                    }else {
                        /*Invalid Email or Password*/
                        setEmail('');
                        setPassword('');
                    }
                }else {
                    /*do have an account*/
                    setEmail('');
                    setPassword('');
                }
            }).catch((error:any)=>{
                console.error(error);
            });
        }catch (error) {
            console.error(error);
        }
    };
    return (
        <section className="w-[100%] h-[100vh] flex flex-col items-center justify-center bg-gray-100">
            <div
                className="w-[280px] sm:w-[400px] h-max bg-white p-[20px] rounded-[15px] shadow-2xl flex flex-col justify-center">
                <h1 className="text-3xl">Sign In</h1>
                <p className="mt-1">Welcome to our easy table booking site If you already have an account please
                    login</p>
                <form className="flex flex-col items-center justify-center gap-[20px] mt-5">
                    <TextField
                        className="w-[100%] sm:w-[80%]"
                        id="outlined-basic"
                        label="Email"
                        type="email"
                        variant="outlined"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <TextField
                        className="w-[100%] sm:w-[80%]"
                        id="outlined-basic"
                        label="Password"
                        type="password"
                        variant="outlined"
                        value={password}
                        onChange={handlePasswordChange}
                    />

                    {/*<Link to="/"  className="w-[100%] sm:w-[80%] h-[52px]">*/}
                        <Button
                            className="w-[100%] sm:w-[80%] h-[52px] text-3xl"
                            variant="contained"
                            color="info"
                            onClick={handleSubmit}
                        >Sign In</Button>
                    {/*</Link>*/}

                </form>
                <p className="text-center mt-3">Don't have an account?
                    <Link to="/signup">
                        <button className="text-blue-600"> Sign Up</button>
                    </Link>
                </p>
            </div>
        </section>
    );
}
