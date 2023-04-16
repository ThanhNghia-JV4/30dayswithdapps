const SimpleContract = artifacts.require('SimpleContract');

contract('SimpleContract', () => {
    it('should be deployed', async () => {
        const simpleContract = await SimpleContract.deployed();
        assert(simpleContract.address != ''); //neu simpleContract tra ve 1 chuoi != rong thi ddungs (khi dep loi thi se sinh ra 1 dia chi vi)
    })
})

contract('SimpleContract', () => {
    it('should be return string hello', async () => {
        const simpleContract = await SimpleContract.deployed();
        const result = simpleContract.sayHello();
        assert(result == 'hello');
    })
})