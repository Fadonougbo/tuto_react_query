// biome-ignore lint/style/useImportType: <explanation>
import React from "react";
import { useEffect } from "react";

const Data = ({
	rend,
}: {
	rend: (content: string) => React.JSX.Element;
}) => {
	console.log("Data render");

	useEffect(() => {}, []);

	return <h1>Data {rend("test doe")} </h1>;
};

export default Data;
