task("when-did-i-last-workout", "Reads the last workout")
    .addParam("contract", "The address of the VRF contract that you want to read")
    .setAction(async taskArgs => {

        const contractAddr = taskArgs.contract
        const networkId = network.name
        console.log("Calling whenDidILastWorkout from WorkoutLog contract ", contractAddr, " on network ", networkId)
        const WorkoutLog = await ethers.getContractFactory("WorkoutLog")

        //Get signer information
        const accounts = await hre.ethers.getSigners()
        const signer = accounts[0]

        //Create connection to API Consumer Contract and call the createRequestTo function
        const workoutLogContract = new ethers.Contract(contractAddr, WorkoutLog.interface, signer)
        try {
            await workoutLogContract.whenDidILastWorkout()
        } catch (e) {
            console.error(e)
        }
        const result = await workoutLogContract.whenDidILastWorkout()
        console.log('Result is: ', result)
        console.log('Result is: ', result.toString())
        console.log('Date Number is: ', result.toNumber())
        const resultAsDate = new Date(result.toNumber() * 1000);
        console.log('Date is: ', resultAsDate.toISOString())
    })

module.exports = {}
