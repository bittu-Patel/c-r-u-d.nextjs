"use client";

import { Fragment, useRef } from "react";
import { Toaster } from "react-hot-toast";

const AddBlog = () => {
    const titleRef = useRef<HTMLInputElement | null>(null);
    const descriptionRef = useRef<HTMLTextAreaElement |null>(null);
    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log
    }
    return (
        <Fragment>
        <Toaster />
           <div className="w-full m-auto flex my-4">
            <div className="flex flex-col justify-center items-center m-auto">
                <p className="text-2xl text-slate-200 font-bold p-3">Add A Wonder Full Blog 🚀</p>
                <form onSubmit={handleSubmit}>
                    <input ref={titleRef} placeholder="Enter Title" type="text" className="rounded-md px-4 py-2 w-full my-2" />
                    <textarea ref={descriptionRef} placeholder="Enter Description" className="rounded-md px-4 py-2 w-full my-2"></textarea>
                    <button className="font-semibold px-4 py-2 shadow-xl bg-slate-200 rounded-lg m-auto hover:bg-slate-100">Submit</button>
                </form>
            </div>
           </div>
        </Fragment>
    );
};

export default AddBlog;