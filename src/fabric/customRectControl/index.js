//@ts-check
import {
	Canvas,
	Control,
	Rect,
} from "/node_modules/fabric/dist/fabric.min.mjs";

/**
 * 矩形控制器触发范围的装饰器(Decorator for the trigger range of the rectangular controller)
 * 会修改 mt, mb, ml, mr 四个控制器的触发范围
 * @param {Rect} rect 矩形
 */
function rectControlsTriggerRangeDecorator(rect) {
	const vertical = ["mt", "mb"];
	const horizontal = ["ml", "mr"];
	const decorationList = vertical.concat(horizontal);
	const keys = Object.keys(rect.controls);
	for (const key of keys) {
		if (!decorationList.includes(key)) continue;
		const control = rect.controls[key];
		const r = control.render.bind(control);
		rect.controls[key] = new Control({
			...control,
			render(...args) {
				r(...args);
				const [, , , , obj] = args;
				const {
					aCoords: { tl, br },
				} = obj;
				if (vertical.includes(key)) {
					this.sizeX = Math.abs(tl.x - br.x);
					this.sizeY = 8;
				} else {
					this.sizeY = Math.abs(tl.y - br.y);
					this.sizeX = 8;
				}
			},
		});
	}
}
(function () {
	/** @type {HTMLDivElement | null} */
	const container = /** @type {HTMLDivElement | null} */ (
		document.getElementById("container")
	);
	/** @type {HTMLCanvasElement | null} */
	const el = /** @type {HTMLCanvasElement | null} */ (
		document.getElementById("canvas")
	);
	if (!el || !container) return;
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
	rectControlsTriggerRangeDecorator(rect);
	canvas.add(rect);
	canvas.setActiveObject(rect);
})();
export default {};
