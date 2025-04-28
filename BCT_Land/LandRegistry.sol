// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LandRegistry {
    struct Land {
        uint id;
        string ownerName;
        string location;
        uint256 area;
    }

    mapping(uint => Land) public lands;
    uint public landCount = 0;

    // Register new land
    function registerLand(string memory _ownerName, string memory _location, uint256 _area) public {
        landCount++;
        lands[landCount] = Land(landCount, _ownerName, _location, _area);
    }

    // Get land information
    function getLand(uint _id) public view returns (uint, string memory, string memory, uint256) {
        Land memory land = lands[_id];
        return (land.id, land.ownerName, land.location, land.area);
    }
}
