pragma solidity ^0.8.0;

contract LandRegistry {

    struct Land {
        string ownerName;
        string landId;
        string landLocation;
        uint256 landPrice;
    }

    mapping(string => Land) public landRegistry;

    function registerLand(string memory landId, string memory ownerName, string memory landLocation, uint256 landPrice) public {
        landRegistry[landId] = Land(ownerName, landId, landLocation, landPrice);
    }

    function getLandDetails(string memory landId) public view returns (Land memory) {
        return landRegistry[landId];
    }
}
