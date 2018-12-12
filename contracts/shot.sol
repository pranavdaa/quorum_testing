contract Funding {
  address public owner;

  constructor() public {
    owner = msg.sender;
  }
}
