import React from "react";
import { useNavigate } from "react-router-dom";
import { firstname, lastname, password, username } from "../stores/atoms";
import { RecoilRoot, useRecoilState, useSetRecoilState } from "recoil";
import axios from "axios";

export default function Signup() {
  const [firstnameValue,setFirstname] = useRecoilState(firstname);
  const [lastnameValue,setlastname] = useRecoilState(lastname);
  const [usernameValue,setUsername] = useRecoilState(username);
  const [passwordValue,setPassword] = useRecoilState(password);
  const navigate = useNavigate();
  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <form className="space-y-6" action="#" method="POST"> */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input onChange={(e)=>{
                  setUsername(e.target.value);
                }}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First Name
              </label>
              <div className="mt-2">
                <input onChange={(e)=>{
                  setFirstname(e.target.value);
                }}
                  id="email"
                  name="email"
                  type="text"
                  autocomplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last Name
              </label>
              <div className="mt-2">
                <input onChange={(e)=>{
                  setlastname(e.target.value);
                }}
                  id="email"
                  name="email"
                  type="Text"
                  autocomplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input onChange={(e)=>{
                  setPassword(e.target.value);
                }}
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={async()=>{
                  const res = await axios.post("http://localhost:3000/api/v1/user/signup",{
                    username:usernameValue,
                    password:passwordValue,
                    firstName:firstnameValue,
                    lastName:lastnameValue,
                    
                  })
                  
                localStorage.setItem("token",res.data.token1);
                console.log(res.data.token1);
                }
              }

              >
                Sign in
              </button>
            </div>
          {/* </form> */}

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account ?
            <button
              onClick={onClickSignin}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </>
  );
  function onClickSignin(e){
    navigate("/signin")
    console.log(e)
  }
}
