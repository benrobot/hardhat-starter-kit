pragma solidity ^0.6.6;

contract WorkoutLog {

    mapping(address => uint256[]) workoutDates;

    function iWorkedOut() public {
        workoutDates[msg.sender].push(now);
    }

    function whenDidILastWorkout() public view returns (uint256 workoutDate) {
        require(workoutDates[msg.sender].length > 0, "NEVER!!!!");
        return workoutDates[msg.sender][workoutDates[msg.sender].length - 1];
    }
}
