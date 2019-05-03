pragma solidity >=0.4.22 <0.6.0;
contract AirlineConsortium{

    struct AirlineDetails {
        uint256 escrew;
        bool status;
        uint256 hashOfDetails;
        uint256 regBalance;
    }

    // Regitration Charges set
    uint price  = 1 ether;
    bool transaction;

    address chairperson;
    mapping(address => AirlineDetails) AirlineX;

    constructor()  public{
        //require(msg.value == price);
        chairperson = msg.sender;

    }

    modifier onlyChairperson(){
         require(msg.sender == chairperson);
         _;
     }
     
    function viewBalance(address _user) view public returns (uint myBalance){
        myBalance = _user.balance;
        return(myBalance);
        /*myBalance = balance[msg.sender];*/
    }
    
    function register() payable public{
        require(msg.value == price);
        AirlineX[msg.sender].regBalance = msg.value;
        AirlineX[msg.sender].status = true;
    }

    function request(address Airline, uint256 hashOfDetails) public{
        // Airline A storing request hash value on Airline B
        AirlineX[Airline].hashOfDetails = hashOfDetails;
    }

    function response(address Airline, uint256 hashOfDetails, uint256 cost) public returns(bool done){
        // Airline B storing response hash value on Airline A
        AirlineX[Airline].hashOfDetails = hashOfDetails;
        // Airline B storing escrew in Airline A that A will pay
        AirlineX[Airline].escrew = cost;
        done = true;
    }

    function settlePayment(address Airline) public{
        // check msg.sender have sufficent ether
        require(msg.sender.balance >= AirlineX[msg.sender].escrew);

        // msg.sender paying its debt to Airline
        Airline.transfer(AirlineX[msg.sender].escrew);
        AirlineX[msg.sender].escrew = 0;
    }
    
    function unregister(address airlineAddress) public onlyChairperson{
        airlineAddress.transfer(AirlineX[airlineAddress].regBalance);
        AirlineX[airlineAddress].regBalance = 0;
        AirlineX[airlineAddress].status = false;
    }

    function getAirlineEscrew(address Airline) public view returns(uint256){
        return AirlineX[Airline].escrew;
    }

    function getAirlineStatus(address Airline) public view returns(bool){
        return AirlineX[Airline].status;
    }
}