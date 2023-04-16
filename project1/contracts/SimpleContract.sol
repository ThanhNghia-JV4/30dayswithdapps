pragma solidity >=0.7.0 <0.9.0;

contract SimpleContract{
    function sayHello()public pure returns (string memory) {
        return "hello";
    }
}