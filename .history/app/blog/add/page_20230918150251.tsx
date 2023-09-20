"use client";

import { Fragment } from "react";
import { Toaster } from "react-hot-toast";

const AddBlog = () => {
    return (
        <Fragment>
        <Toaster />
           <div className="w-full m-auto flex my-4">
            <div className="flex flex-col justify-center items-center m-auto">
                <p className="text-2xl text-slate-200 font-bold p-3">Add A Wonder Full Blog 🚀</p>
                <form>
                    <input placeholder="Enter Title" type="text" className="rounded-md px-4 py-2 my-2" />
                    <></textarea>
                </form>
            </div>
           </div>
        </Fragment>
    );
};

export default AddBlog;