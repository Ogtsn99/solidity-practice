- これは何
  - solidityとReactのちょっとした練習兼テンプレみたいな
- できること
  - フロントで表示される文字列(greeting)をガス代を払って変更できるだけ
- 動かし方
  1. ルートディレクトリで $ npm install
  2. $ npx hardhat node
  3. コントラクトをデプロイする $ npx hardhat run scripts/deploy.ts --network localhost
  4. frontendのディレクトリに移動 $ cd frontend
  5. $ npm install
  6. $ npm start
- 実際に使ってみる
  1. MetaMaskが入ってなかったら入れる
  2. MetaMaskを開いてアカウントのインポートを行う。秘密鍵はnpx hardhat node
  をしたときに出てきたものの一つを使う。
  3. ネットワークのカスタムRPCで新しいネットワークを作る
  - RPC URL http://localhost:8545
  - チェーンID 31337
  4. Connect Walletを押す
  5. 最初はhello, hardhat!になっているはず。Change Greeting
     の下のフォームにnew greetingを入れてenter
  6. ガス代を払ってgreetingが変わっていたら成功!