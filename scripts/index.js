async function main () {
    const accounts = await ethers.provider.listAccounts();

    // Set up an ethers contract, representing our deployed Box instance
    const address = '0xe7f1725e7734ce288f8367e1bb143e90bb3f0512';
    const Box = await ethers.getContractFactory('Box');
    const box = await Box.attach(address);

    // Send a transaction to store() a new value in the Box
    await box.store(111);

    // Call the retrieve() function of the deployed Box contract
    const value = await box.retrieve();
    console.log('Box value is', value.toString());
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });