# TraceIt
___
## Abstract
**TraceIt** aims revolutionizing **Poultry Market** using Ethereum blockchain which provides transparent, secure data storage and transfer technology with no intermediary, which means each member can check the validity of the chain . Producers will post data online And stick a Qr code to products ,consumers will be able to scan the Qr code and get all the details about product.


## Install Metamask
**To connect your web3 js to the locally hosted truffle development we need metmask.**
You can download Chrome Extension At [MetaMask Chrome Extension](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en)

Other Browser Users can find MetaMask On their respective browser stores.

After installing click on add new network and set  your new network to localhost:3000
And also Add the account key to the first account that is account[0] with the respective secret key.

Note: Every time you start from fresh always remember to reset your metmask acount as your localhost starts from zero but the metmask always store some cached data therefore it will thow error as the nonce would not match.
MetaMask
An Ethereum Wallet in your Browser

## Running Blockchain
### Steps
1. Go to the blockchain folder by typing `cd blockchain`
2. Type `truffle complile` to compile the contracts
3. Type `truffle develop`. It will start the development server.
4. Type `migrate --reset` to migrate the contracts.
5. After you have entered the `truffle compile` command in 2nd step, a **build/contracts** folder will be generated inside the blockchain folder. Go to the project.json in the build folder and copy the `abis` array.
6) Now Go to client/Abis.js and paste the array in `Projectabis` variable and save it.

## Running the Frontend

To run the frontend go to the client folder cd client and type `npm start`
This will start a new development server at localhost:3000

## To setup NODE.JS server
1) Add `.env` file
	1.1) Add PORT ,MONGODB_URl,JWT_SECRET
2) Enter npm install in cmd to download all dependencies
3) `node index.js` to start the server


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

[^1]: This is the footnote.