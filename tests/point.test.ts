import {Point} from "../src/point";

describe('Point', () => {
    it('Point - should have x and y', () => {
        const x: number = 0;
        const y: number = 0;
        const point: Point = new Point(x, y);

        expect(point.x).toBe(x);
        expect(point.y).toBe(y);
    });
})
