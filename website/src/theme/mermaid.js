import React, { useEffect } from "react";
import mermaid from "mermaid";

mermaid.initialize({
	startOnLoad: true,
	theme: 'dark',
	logLevel: 1,
	flowchart: { curve: 'linear' },
});

const Mermaid = ({ chart }) => {
	useEffect(() => {
		mermaid.contentLoaded();
	}, []);
	return <div className="mermaid">{chart}</div>;
};

export default Mermaid;