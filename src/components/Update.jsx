import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../Reducer/UserReducer";

const Update = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const existenstUser = user.find((user) => user.id == id);

  const [name, setName] = useState(existenstUser ? existenstUser.name : "");
  const [email, setEmail] = useState(existenstUser ? existenstUser.email : "");

  const handelUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: name,
        email: email,
      })
    );
    navigate("/");
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-zinc-950 h-max min-h-[100vh] pb-5">
        <div className="mx-auto flex w-full flex-col justify-center px-5 pt-0 md:h-[unset] md:max-w-[50%] lg:h-[100vh] min-h-[100vh] lg:max-w-[50%] lg:px-6">
          <a className="mt-10 w-fit text-white" href="/"></a>
          <div className="my-auto mb-auto mt-8 flex flex-col md:mt-[70px] w-[350px] max-w-[450px] mx-auto md:max-w-[450px] lg:mt-[130px] lg:max-w-[450px]">
            <p className="text-[32px] font-bold text-white">Enter Data</p>

            <div className="mt-8"></div>
            <div className="relative my-4"></div>
            <div>
              <form className="mb-4" onSubmit={handelUpdate}>
                <div className="grid gap-2">
                  <div className="grid gap-1">
                    <label className="text-white">Name</label>
                    <input
                      className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border bg-zinc-950 text-white border-zinc-800 px-4 py-3 text-sm font-medium placeholder:text-zinc-400 focus:outline-0 dark:border-zinc-800 dark:bg-transparent dark:text-white dark:placeholder:text-zinc-400"
                      id="name"
                      placeholder="name"
                      type="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <label className="text-zinc-950 mt-2 dark:text-white">
                      Email
                    </label>
                    <input
                      id="email"
                      placeholder="email@gmail"
                      type="email"
                      className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border bg-zinc-950 text-white border-zinc-800 px-4 py-3 text-sm font-medium placeholder:text-zinc-400 focus:outline-0 dark:border-zinc-800 dark:bg-transparent dark:text-white dark:placeholder:text-zinc-400"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <button
                    className="whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-zinc-950 hover:bg-white/90 active:bg-white/80 flex w-full max-w-full mt-6 items-center justify-center rounded-lg px-4 py-4 text-base font-medium"
                    type="submit"
                  >
                    Submit
                  </button>
                  <Link
                    className="whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-zinc-950 hover:bg-white/90 active:bg-white/80 flex w-full max-w-full mt-6 items-center justify-center rounded-lg px-4 py-4 text-base font-medium"
                    to={"/"}
                  >
                    Back
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
