import {clsx} from "clsx"
import React from "react";
import {twMerge} from "tailwind-merge"
import { PushButton } from "./PushButton";

const Home = () => {
	console.log("render home");
	
	
	return (
			<>
			<h1 className={twMerge(clsx({"bg-green-400":false,"text-4xl":true},"text-xl"))} >Home</h1>
			<PushButton/>
			</>
	);
};

export default Home;


