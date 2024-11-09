const studentHogwarts = (function() {
    // Private variables
    let privateScore = 0;
    let name = null;

    // Private method
    function changeScoreBy(points) {
        privateScore += points;
    }

    // Public methods
    return {
        setName(newName) {
            name = newName;
        },
        rewardStudent() {
            changeScoreBy(1);
        },
        penalizeStudent() {
            changeScoreBy(-1);
        },
        getScore() {
            return `${name}: ${privateScore}`;
        }
    };
})();

// Testing the module with 'harry' and 'draco'

const harry = Object.create(studentHogwarts);
harry.setName("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

const draco = Object.create(studentHogwarts);
draco.setName("Draco");
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore()); 
