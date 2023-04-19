 const NFT = {
    "name":_name,
    "eyeColor":_eyeColor,
    "shirtType":_shirtType,
    "bling":_bling

 }
 NFTs.push(NFT);
 console.log("Minted: " + _name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
for(let i = 0; i < NFTs.length; i++){
   console.log("\nID: \t\t" + (i + 1));
   console.log("\nName: \t\t" + NFTs[i].name);
   console.log("eyeColor: \t" + NFTs[i].eyeColor);
   console.log("shirtType: " + NFTs[i].shirtType);
   console.log("bling: \t\t " + NFTs[i].bling);

}
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n" + NFTs.length);

}

// call your functions below this line
mintNFT("Chrysler", "Brown", "CropTop", "Headphones");
mintNFT("Jones", "Blue", "Hoodie", "Gold Chain");
mintNFT("Rain", "Brown", "Shirt", "Choker");
mintNFT("Inigo", "Green", "Polo", "Necklace");
listNFTs();
getTotalSupply();
