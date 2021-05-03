# TraceIt

___

## Abstract
**TraceIt** aims to revolutionize **Poultry Market** using Ethereum blockchain which provides transparent, secure data storage and transfer technology with no intermediary. This means that each member can check the validity of the chain. Producers will post data online and stick a QR code to products and consumers will be able to scan that QR code to get all the details about product.

# How To Setup Our Application

## 1. Install Metamask

MetaMask
: An Ethereum Wallet in your Browser

**To connect your web3 js to the locally hosted truffle development we need metmask.**
You can download its Chrome Extension At [MetaMask Chrome Extension](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en).

Other Browser Users can find MetaMask Extension/AddOn On their respective browser stores.

After installing click on add new network and set  your new network to localhost:3000
And also Add the account key to the first account that is account[0] with the respective secret key.

>**Note:** Every time you start from fresh always remember to reset your metmask acount as your localhost starts from zero but the metmask always stores some cached data therefore it will thow error as the nonce would not match.


## 2. Running Blockchain
### Steps (in Terminal)
1. Go to the blockchain folder by entering `cd blockchain`
2. Enter `truffle complile` to compile the contracts
3. Enter `truffle develop`. It will start the development server.
4. Enter `migrate --reset` to migrate the contracts.
5. After you have entered the `truffle compile` command in 2nd step, a **build/contracts** folder will be generated inside the blockchain folder. Go to the project.json in the build folder and copy the `abis` array.
6. Now Go to client/Abis.js and paste the array in `Projectabis` variable and save it.

## 3. Running the Frontend

To run the frontend go to the client folder cd client and type `npm start`
This will start a new development server at localhost:3000

## 4. To setup NODE.JS server
1. Add `.env` file
	- Add PORT ,MONGODB_URl,JWT_SECRET
2. Enter npm install in cmd to download all dependencies
3. `node index.js` to start the server


**Any Doubts regarding Project can be addressed to any of the Contributors**
Any type of collabration and suggestions are also Welcomed 😁

___

### Project Screenshots
![Sign In](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/499/513/datas/gallery.jpg	)

![Sign Up](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/499/504/datas/gallery.jpg)

![Get Details](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/499/511/datas/gallery.jpg)

![Post Details](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/499/510/datas/gallery.jpg)

![Update Details](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/499/515/datas/gallery.jpg)


---

	This concept can further be applied to the whole consumer-producer market supply chain.

