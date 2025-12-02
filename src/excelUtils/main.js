import exceljs from "exceljs";
import { resolve } from "path";
import { cwd } from "process";

(async function main() {
	const workbook = new exceljs.Workbook();
	await workbook.xlsx.readFile(
		resolve(
			cwd(),
			"./src/excelUtils/自有库各语种标点标签规范.xlsx",
		),
	);
	const sheet = workbook.getWorksheet("全部标点参考");
	const charSetCol = sheet?.getColumn(1).values;
	const symbolCol = sheet?.getColumn(2).values;
	const map = new Map();
	if (charSetCol && symbolCol) {
		for (let i = 1; i < charSetCol.length; i++) {
			const charSet = charSetCol[i];
			let symbol = symbolCol[i];
			if (charSet && symbol) {
				if (symbol === `"`) {
					symbol = `\\` + symbol;
				}
				const value = map.get(charSet);
				if (value) {
					symbol = value + "|" + symbol;
				}
				map.set(charSet, symbol);
			}
		}
	}
	const obj = Object.fromEntries(map);
	console.log(obj);
})();
