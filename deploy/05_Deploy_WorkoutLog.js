let { networkConfig } = require('../helper-hardhat-config')

module.exports = async ({
    getNamedAccounts,
    deployments,
    getChainId
}) => {

    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = await getChainId()
    log("----------------------------------------------------")
    const workoutLog = await deploy('WorkoutLog', {
        from: deployer,
        log: true
    })
    log("Log a workout with command:")
    log("npx hardhat i-worked-out --contract " + workoutLog.address + " --network " + networkConfig[chainId]['name'])
    log("See last workout with command:")
    log("npx hardhat when-did-i-last-workout --contract " + workoutLog.address + " --network " + networkConfig[chainId]['name'])
    log("----------------------------------------------------")

}

module.exports.tags = ['all', 'feed', 'main']
