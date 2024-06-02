const NFTcollection = []


function mintNFT (name, eyecolor, shirtType, bling)
{
    const NFT = {
        "name": name,
        "eyecolor": eyecolor,
        "shirtType": shirtType,
        "bling": bling
    }
    NFTcollection.push(NFT);
    console.log("Minted: "+ name);
}

function listNFTs ()
{
    for(let i = 0;i< NFTcollection.length; i++)
        {
            console.log(NFTcollection[i]);
        }
    
}

function getTotalSupply()
{
    console.log(NFTcollection.length);
}

mintNFT("John Wick","Brown","Denim","Silver Chain");
listNFTs();
getTotalSupply();
