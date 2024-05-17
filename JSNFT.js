const NFTs = []

function mintNFT (_owner,  _name, _typeOfPet, _breed) {
    const NFT = {
        "Owner": _owner,
        "PetName": _name,
        "PetType": _typeOfPet,
        "Breed": _breed,
    }
    NFTs.push(NFT);
    console.log("Minted " + _name);
}

function listNFTs () {
    for (let i = 0; i < NFTs.length; i++) {
        console.log("\nCustomerID = " + (i+1));
        console.log("Owner: \t\t" + NFTs[i].Owner);
        console.log("Pet Name: \t" + NFTs[i].PetName);
        console.log("Pet Type: \t" + NFTs[i].PetType);
        console.log("Pet Breed: \t" + NFTs[i].Breed);
    }
}

function getTotalSupply() {
    console.log("\n" + NFTs.length);
}

mintNFT("Ms. Candy", "Mimi", "Siamese", "Cat");
mintNFT("Mr. Nan", "Kiko", "Labrador", "Dog");
mintNFT("Elska", "Artax", "Labrador", "Dog");
listNFTs();
getTotalSupply();
