const NFTs = []

function mintNFT (_name, _typeOfPet, _breed, _owner) {
    const NFT = {
        "Owner": _owner,
        "PetType": _typeOfPet,
        "Breed": _breed,
        "PetName": _name
    }
    NFTs.push(NFT);
    console.log("Minted " + _name);
}

function listNFTs () {
    for (let i = 0; i < NFTs.length; i++) {
        console.log("\nCustomerID = " + (i+1));
        console.log("Owner: \t\t" + NFTs[i].Owner);
        console.log("Pet Type: \t" + NFTs[i].PetType);
        console.log("Pet Breed: \t" + NFTs[i].Breed);
        console.log("Pet Name: \t" + NFTs[i].PetName);
    }
}

function getTotalSupply() {
    console.log("\n" + NFTs.length);
}

mintNFT("Ms. Candy", "Cat", "Siamese", "Mimi");
mintNFT("Mr. Nan", "Dog", "Labrador", "Kiko");
mintNFT("Elska", "Dog", "Labrador", "Artax");
listNFTs();
getTotalSupply();
