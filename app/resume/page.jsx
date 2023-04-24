import { Navigation } from "../components/nav";
// import { Card } from "../components/card";


export default function Example() {
	return (
	  <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
		<Navigation />
		<div className="container flex items-center justify-center min-h-screen px-4 mx-auto md:pt-20">
		  <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-8 sm:mt-0 lg:gap-16 lg:grid-cols-3">
            <div className="text-white">the resume view</div>
		  </div>
		</div>
	  </div>
	);
  }
