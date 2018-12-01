// Program makes Sphero continually move left from callibration
// point at top speed
async function startProgram() {
	while (true) {
		await roll(90, 255, 1);
	}
}