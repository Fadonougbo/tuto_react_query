import { useToast } from "./mytoast";


export const Button=({input,pushToast})=> {

    const handleClick = () => {
		pushToast({
			body: input?.current?.value,
			id: Date.now() * Math.random(),
		});
	};

    return <button onClick={handleClick}>click me</button>
}