"use strict";
function generateTime(allMin = 1440, step = 15) {
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    if (!Number.isInteger(allMin / step)) return [];
    return Array.from(Array(allMin / step)).map(
      () => start.setMinutes(start.getMinutes() + step) && start
    );
}
export default generateTime;
