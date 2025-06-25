describe("Rover", () => {
    it('should have a starting point', () => {
        const startingPoint: Point = new Point();
        const rover: Rover = new Rover(startingPoint);

        expect(rover.startingPoint).toBe(startingPoint);
    });
})
