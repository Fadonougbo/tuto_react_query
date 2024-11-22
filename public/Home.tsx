import { AnimatePresence, Reorder, motion, useAnimate, useScroll } from "motion/react";
import React, {
	forwardRef,
	lazy,
	type MouseEvent,
	useEffect,
	useRef,
	useState,
} from "react";

const variant = {
	n1: { opacity: 1 },
	n2: { opacity: 0 },
};

const variant2 = {
	r1: { rotate: 0, x: 0 },
	r2: { rotate: 50, x: 40 },
};

const Home = () => {
	console.log("home render");

	const [toggle, setToggle] = useState(true);

	const [data, setData] = useState([
		"doe",
		"agut",
		"a",
		"dsd",
		"bosaline",
		"guira",
		"bojo",
		"b-bee",
		'ssss',
		'w',
		"w2qq",
		'skiwj',
		'aoiq',
		'30o',
		'laii82',
		'987qw',
		'alqik2',
		'9876'
	]);

	const handleClick = (e: MouseEvent) => {
		const id=e.currentTarget.id
		
		const newData=data.filter((item)=> {
			return item !== id
		})

		setData(()=>[...newData])

		setToggle(!toggle)
	};


	const contrainRef=useRef(null)

	const { scrollYProgress } = useScroll();

	const [items, setItems] = useState([0, 1, 2, 3])

	

	return (
		<div>
			<h1>Home</h1>
			<div style={{ display: "flex", width: "100%", flexWrap: "wrap", gap: 3 }}>
				{data.map((item, key) => {
					return (
						<motion.div
							style={{ height: "9rem", width: "9rem", background: "tomato" }}
							key={item}
							id={item}
							layout
							
							onClick={handleClick}
						>
							{item}
						</motion.div>
					);
				})}
			</div>
			<Reorder.Group values={items} onReorder={setItems}>
      {items.map(item => (
        <Reorder.Item key={item} value={item}>
          {item}
        </Reorder.Item>
      ))}
    </Reorder.Group>
			<motion.div style={{ background: "black",scaleY: scrollYProgress, height: "9rem", width: "9rem",position:"fixed", top:0 }} ></motion.div>
				{/* <motion.div
				initial={{ transform: "translateX(-100px)" }}
				animate={{ transform: "translateX(0px)" }}
				transition={{duration:5,type: "spring",repeat:4,repeatType:"reverse" }}
				style={{ height: "9rem", width: "9rem", background: "green" }}
				/> */}
				<motion.section style={{background:'blue',height:"20rem"}} ref={contrainRef}>

				<motion.div style={{ height: "9rem", width: "9rem", background: "green" }} drag dragConstraints={contrainRef}   />
				</motion.section>
				{/* <AnimatePresence>
				{toggle && (
					<motion.div
					key="modal"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					style={{ height: "9rem", width: "9rem", background: "green" }}
					/>
				)}
				</AnimatePresence> */}

			<br />

			{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
			<button onClick={handleClick}>click me</button>
		</div>
	);
};

export default Home;

const Box = forwardRef((propos, ref) => {
	// biome-ignore lint/style/useSelfClosingElements: <explanation>
	return (
		<div
			style={{ height: "4rem", width: "4rem", background: "tomato" }}
			ref={ref}
		></div>
	);
});

const AnimateBox = motion.create(Box);

/* type X=keyof JSX.IntrinsicElements;

type  u={
  name:string,
  age:number
}
const y:u[keyof u]=""; */

/* type CompoType = {
	As:HTML;
  children:never
};
 */

const Compo = ({
	As = "input",
	children,
	...props
}: { As: any; children?: any }) => {
	// biome-ignore lint/style/useSelfClosingElements: <explanation>
	return <As {...props} />;
};

export const User = () => {
	console.log("User render");

	useEffect(() => {}, []);

	return <h1>User </h1>;
};
