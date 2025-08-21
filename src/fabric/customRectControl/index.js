import {
	Canvas,
	Rect,
} from "/node_modules/fabric/dist/fabric.min.mjs";
(function () {
	const container = document.getElementById("container");
	const el = document.getElementById("canvas");
	// const observer = new ResizeObserver((entries) => {
	// 	const { width, height } = entries[0].contentRect;
	// 	el.width = width;
	// 	el.height = height;
	// });
	// observer.observe(container);
	el.style.width = "100%";
	el.style.height = "100%";
	el.width = container.offsetWidth;
	el.height = container.offsetHeight;
	const canvas = new Canvas(el);
	const rect = new Rect({
		left: 100,
		top: 50,
		fill: "yellow",
		width: 200,
		height: 100,
		objectCaching: false,
		stroke: "lightgreen",
		strokeWidth: 4,
	});
	canvas.add(rect);
	canvas.setActiveObject(rect);
})();
export default {};
