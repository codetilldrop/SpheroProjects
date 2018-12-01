// Program makes Sphero continually move right from callibration
// point at top speed
async function startProgram() {
	while (true) {
		await roll(90, 255, 1);
	}
}