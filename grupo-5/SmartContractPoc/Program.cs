using System;
using System.Threading.Tasks;
using Nethereum.Web3;
using Nethereum.Contracts;
using Nethereum.Web3.Accounts;

class Program
{
    static async Task Main(string[] args)
    {
        // URL del nodo de Ganache
        var ganacheUrl = "http://localhost:8545";

        // Cuenta predeterminada de Ganache para el despliegue del contrato
        var deployerAddress = "0xYourDeployerAddress";
        var deployerPrivateKey = "YourDeployerPrivateKey";

        // ABI y bytecode del contrato
        var contractAbi = "YourContractAbi";
        var contractBytecode = "YourContractBytecode";

        // Dirección del contrato desplegado
        string contractAddress = null;

        // Crear una instancia de Web3 con la URL de Ganache
        var web3 = new Web3(ganacheUrl);

        // Crear una cuenta a partir de la clave privada del desplegador
        var deployerAccount = new Account(deployerPrivateKey);

        // Crear una transacción de despliegue de contrato
        var deploymentTransaction = new DeployContractTransactionBuilder()
            .WithByteCode(contractBytecode)
            .WithAbi(contractAbi)
            .WithFrom(deployerAddress)
            .WithGas(4700000)
            .BuildTransaction();

        try
        {
            // Desplegar el contrato
            var transactionReceipt = await web3.Eth.GetContractDeploymentHandler<DeployContractTransactionBuilder>()
                .SendRequestAndWaitForReceiptAsync(deploymentTransaction, deployerAccount);

            contractAddress = transactionReceipt.ContractAddress;
            Console.WriteLine($"Contrato desplegado en la dirección: {contractAddress}");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error al desplegar el contrato: {ex.Message}");
        }

        if (contractAddress != null)
        {
            // Interactuar con el contrato desplegado
            var contract = web3.Eth.GetContract(contractAbi, contractAddress);

            try
            {
                // Llamar a una función del contrato
                var setMessageFunction = contract.GetFunction("setMessage");
                var transactionHash = await setMessageFunction.SendTransactionAsync(deployerAddress, "Nuevo mensaje");

                Console.WriteLine($"Transacción enviada. Hash: {transactionHash}");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error al interactuar con el contrato: {ex.Message}");
            }
        }
    }
}
