task("i-worked-out", "Logs a workout with the current date/time")
    .addParam("contract", "The address of the API Consumer contract that you want to call")
    .setAction(async taskArgs => {

        const contractAddr = taskArgs.contract
        const networkId = network.name
        console.log("Calling iWorkedOut using contract ", contractAddr, " on network ", networkId)
        const WorkoutLog = await ethers.getContractFactory("WorkoutLog")

        //Get signer information
        const accounts = await hre.ethers.getSigners()
        const signer = accounts[0]

        //Create connection to VRF Contract and call the getRandomNumber function
        const workoutLogContract = new ethers.Contract(contractAddr, WorkoutLog.interface, signer)
        var result = await workoutLogContract.iWorkedOut()
        console.log('Contract ', contractAddr, ' log workout successfully called. Transaction Hash: ', result.hash)
        console.log("Run the following to read the last workout time:")
        console.log("npx hardhat when-did-i-last-workout --contract " + contractAddr + " --network " + network.name)
    })

module.exports = {}
