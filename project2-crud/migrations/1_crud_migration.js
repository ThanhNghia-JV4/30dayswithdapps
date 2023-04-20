const Crud = artifacts.require('Crud');

module.exports = function(deploy){
    deployer.deploy(Crud);
}