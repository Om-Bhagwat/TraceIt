// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
contract Project{
    struct  Product{
      uint  product_id; 
      string product_name;
      string product_manufacture_date;
      string product_expiry_date;
      string latitude;
      string longitude;
      string name;
    }
    
    struct Level{
        uint id;
        string name;
        //string time_received;
        string lat;
        string lon;
        string transport_address;
        string feedback;
        string complaint;
    }

    struct Multitransport{
        uint id;
        mapping(uint=>Level) multransport;
    }
    mapping(uint=>Product) public data_product;
    mapping(uint=>Level) public trans;
    mapping(uint=>Multitransport) public mul_tr;

    uint[] public _idcheck;
    uint[] public _idtrans;

    
    function setValue(uint _id,string memory _product_name,string memory _product_manu,string memory _product_exp,string memory _supp_lat,string memory _supp_lon,string memory _supp_name) public {       
        _idcheck.push(_id);
        data_product[_id] = Product(_id,_product_name, _product_manu,_product_exp,_supp_lat,_supp_lon,_supp_name);
    }
    
    function updateMulTranVal(uint _id,uint _trid ,string memory name,string memory lat,string memory lon,string memory transport_address,string memory feedback,string memory complaint) public{
            mul_tr[_id].id = _id;
            mul_tr[_id].multransport[_trid].id = _id;
            mul_tr[_id].multransport[_trid].name = name;
            mul_tr[_id].multransport[_trid].lat = lat;
            mul_tr[_id].multransport[_trid].lon = lon;
            mul_tr[_id].multransport[_trid].transport_address = transport_address;
            mul_tr[_id].multransport[_trid].feedback = feedback;
            mul_tr[_id].multransport[_trid].complaint = complaint;
    }
    
    /*function updateTransVal(uint _id, string memory name,string memory lat,string memory lon) public{
        trans[_id] = Level(_id,name,lat,lon);
        check_level[_id]=true;
    }*/
    

    function getMultiname(uint _id,uint we) public view returns (string memory){
            return( mul_tr[_id].multransport[we].name);
    }
    
    function getMultilat(uint _id,uint we) public view returns (string memory){
        return(mul_tr[_id].multransport[we].lat);
    }
    
    function getMultilon(uint _id,uint we) public view returns (string memory){
        return(mul_tr[_id].multransport[we].lon);
    }
    
    function getMultitraddress(uint _id,uint we) public view returns (string memory){
        return(mul_tr[_id].multransport[we].transport_address);
    }
    function getMultifeed(uint _id,uint we) public view returns (string memory){
        return(mul_tr[_id].multransport[we].feedback);
    }
    function getMulticomp(uint _id,uint we) public view returns (string memory){
        return(mul_tr[_id].multransport[we].complaint);
    }
    


    function getId(uint _id) public view returns(uint){
         Product memory  p = data_product[_id];
         return(p.product_id);
    }



    function getPname(uint _id) public view returns(string memory){
         Product memory  p = data_product[_id];
         return(p.product_name);
    }
    function getPman(uint _id) public view returns(string memory){
         Product memory  p = data_product[_id];
         return(p.product_manufacture_date);
    }
    function getPexp(uint _id) public view returns(string memory){
         Product memory  p = data_product[_id];
         return(p.product_expiry_date);
    }
    
    function getSlat(uint _id) public view returns(string memory){
        Product memory  s = data_product[_id];
         return(s.latitude);
    }
    function getSlon(uint _id) public view returns(string memory){
        Product memory  s = data_product[_id];
         return(s.longitude);
    }
    function getSname(uint _id) public view returns(string memory){
         Product memory  s = data_product[_id];
         return(s.name);
    }
    
    function getArr() public  returns(uint){

        if(_idcheck.length==0){
            _idcheck.push(1);
            return 1;
        }
        else{
            uint a = _idcheck[_idcheck.length-1]+1;
            _idcheck.push(a);
            return a;
        }
    }

    function getTran() public returns(uint){
        if(_idtrans.length==0){
            _idtrans.push(1);
            return 1;
        }else{
            uint b = _idtrans[_idtrans.length-1]+1;
            _idtrans.push(b);
            return b;
        }
    }
    
}