// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract EventNFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    address private _owner;

    Counters.Counter private _tokenIdCounter;

    string private _baseTokenURI;
    string private _eventCardCID;

    event EventTokenMinted(address indexed to, uint256 tokenId);

    // 생성자에서 기본 URI와 이벤트 카드 CID를 받음
    constructor(
        string memory baseTokenURI_,
        string memory eventCID
    ) ERC721("EventNFT", "ENFT") {
        _baseTokenURI = baseTokenURI_;
        _eventCardCID = eventCID;
    }

    modifier onlyOwner() {
        require( _owner == _msgSender(), "Ownable: caller is not the owner");
        _;
    }

    // EventCard NFT 민트 함수
    function mintEventCard(address to) public onlyOwner returns (uint256) {
        uint256 newTokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();

        _safeMint(to, newTokenId);
        _setTokenURI(newTokenId, string(abi.encodePacked("ipfs://", _eventCardCID)));

        emit EventTokenMinted(to, newTokenId);
        return newTokenId;
    }

    // 기본 URI 변경 함수
    function setBaseURI(string memory newBaseURI) public onlyOwner {
        _baseTokenURI = newBaseURI;
    }

    // 기본 URI 반환 함수
    function _baseURI() internal view override returns (string memory) {
        return _baseTokenURI;
    }

    // 기본 URI 조회 함수
    function getBaseURI() public view onlyOwner returns (string memory) {
        return _baseURI();
    }
}
