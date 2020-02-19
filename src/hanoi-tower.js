module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {

    const turns = Math.pow(2, disksNumber) - 1;
    const speed = turns / (turnSpeed / 3600);

    return {
        turns: turns,
        speed: speed
    };
};