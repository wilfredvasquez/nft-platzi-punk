const { expect } = require("chai");
const {ethers} = require("hardhat");

describe('Platzi Punks Contract', () => {
    const setup = async({ maxSupply = 10000}) => {
        const [owner] = await ethers.getSigners();
        const PlatziPunks = await ethers.getContractFactory("PlatziPunks");
        const deployed = await PlatziPunks.deploy(maxSupply)
    
        return {
            owner, deployed
        }
    }
    
    describe('Deployment', () => {
        it('Sets max supply to passed param', async () => {
            const maxSupply = 4000;

            const { deployed } = await setup({ maxSupply });
            const returnMaxSupply = await deployed.maxSupply();
            expect(maxSupply).to.equal(returnMaxSupply)
        });
    });

    describe('Minting', () => {
        it('Mints a new token and assings it to owner', async() => {
            const { owner, deployed } = await setup({});
            await deployed.mint();

            const ownerOfMinted = await deployed.ownerOf(0);

            expect(ownerOfMinted).to.equal(owner.address);
        })

        it('Has a minting limit', async () => {
            const maxSupply = 2;
            const { deployed } = await setup({ maxSupply });

            await deployed.mint();
            await deployed.mint();

            await expect(deployed.mint()).to.be.revertedWith("No Platzi Punks left")
        });
    });
})