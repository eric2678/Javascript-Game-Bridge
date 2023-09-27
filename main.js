'use strict';

class cardDeck{
    constructor() {
        this.deckOrder = [];
        this.cardAmount = 52;
        this.cardPriority = {
            "Ace of Hearts":  13, "2 of Hearts":  1, "3 of Hearts":  2, "4 of Hearts":  3, "5 of Hearts":  4, "6 of Hearts":  5, "7 of Hearts":  6, "8 of Hearts":  7, "9 of Hearts":  8, "10 of Hearts":  9, "Jack of Hearts":  10, "Queen of Hearts":  11, "King of Hearts":  12,
            "Ace of Diamonds":13, "2 of Diamonds":1, "3 of Diamonds":2, "4 of Diamonds":3, "5 of Diamonds":4, "6 of Diamonds":5, "7 of Diamonds":6, "8 of Diamonds":7, "9 of Diamonds":8, "10 of Diamonds":9, "Jack of Diamonds":10, "Queen of Diamonds":11, "King of Diamonds":12,
            "Ace of Clubs":   13, "2 of Clubs":   1, "3 of Clubs":   2, "4 of Clubs":   3, "5 of Clubs":   4, "6 of Clubs":   5, "7 of Clubs":   6, "8 of Clubs":   7, "9 of Clubs":   8, "10 of Clubs":   9, "Jack of Clubs":   10, "Queen of Clubs":   11, "King of Clubs":   12,
            "Ace of Spades":  13, "2 of Spades":  1, "3 of Spades":  2, "4 of Spades":  3, "5 of Spades":  4, "6 of Spades":  5, "7 of Spades":  6, "8 of Spades":  7, "9 of Spades":  8, "10 of Spades":  9, "Jack of Spades":  10, "Queen of Spades":  11, "King of Spades":  12
        };
        this.cardValue = {
            "Ace of Hearts":  1, "2 of Hearts":  2, "3 of Hearts":  3, "4 of Hearts":  4, "5 of Hearts":  5, "6 of Hearts":  6, "7 of Hearts":  7, "8 of Hearts":  8, "9 of Hearts":  9, "10 of Hearts":  10, "Jack of Hearts":  11, "Queen of Hearts":  12, "King of Hearts":  13,
            "Ace of Diamonds":1, "2 of Diamonds":2, "3 of Diamonds":3, "4 of Diamonds":4, "5 of Diamonds":5, "6 of Diamonds":6, "7 of Diamonds":7, "8 of Diamonds":8, "9 of Diamonds":9, "10 of Diamonds":10, "Jack of Diamonds":11, "Queen of Diamonds":12, "King of Diamonds":13,
            "Ace of Clubs":   1, "2 of Clubs":   2, "3 of Clubs":   3, "4 of Clubs":   4, "5 of Clubs":   5, "6 of Clubs":   6, "7 of Clubs":   7, "8 of Clubs":   8, "9 of Clubs":   9, "10 of Clubs":   10, "Jack of Clubs":   11, "Queen of Clubs":   12, "King of Clubs":   13,
            "Ace of Spades":  1, "2 of Spades":  2, "3 of Spades":  3, "4 of Spades":  4, "5 of Spades":  5, "6 of Spades":  6, "7 of Spades":  7, "8 of Spades":  8, "9 of Spades":  9, "10 of Spades":  10, "Jack of Spades":  11, "Queen of Spades":  12, "King of Spades":  13
        };
        this.cardPosition = {
            "Ace of Hearts":   1, "2 of Hearts":   2, "3 of Hearts":   3, "4 of Hearts":   4, "5 of Hearts":   5, "6 of Hearts":   6, "7 of Hearts":   7, "8 of Hearts":   8, "9 of Hearts":   9, "10 of Hearts":  10, "Jack of Hearts":  11, "Queen of Hearts":  12, "King of Hearts":  13,
            "Ace of Diamonds":14, "2 of Diamonds":15, "3 of Diamonds":16, "4 of Diamonds":17, "5 of Diamonds":18, "6 of Diamonds":19, "7 of Diamonds":20, "8 of Diamonds":21, "9 of Diamonds":22, "10 of Diamonds":23, "Jack of Diamonds":24, "Queen of Diamonds":25, "King of Diamonds":26,
            "Ace of Clubs":   27, "2 of Clubs":   28, "3 of Clubs":   29, "4 of Clubs":   30, "5 of Clubs":   31, "6 of Clubs":   32, "7 of Clubs":   33, "8 of Clubs":   34, "9 of Clubs":   35, "10 of Clubs":   36, "Jack of Clubs":   37, "Queen of Clubs":   38, "King of Clubs":   39,
            "Ace of Spades":  40, "2 of Spades":  41, "3 of Spades":  42, "4 of Spades":  43, "5 of Spades":  44, "6 of Spades":  45, "7 of Spades":  46, "8 of Spades":  47, "9 of Spades":  48, "10 of Spades":  49, "Jack of Spades":  50, "Queen of Spades":  51, "King of Spades":  52
        };
        this.symbols = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
        this.numbers = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
        this.declare();
        this.shuffle();
        this.deal();
    }
    declare(){
        this.fullDeck = [];
        for (let i=0; i<4; i++) {
            for (let j=0; j<13; j++) {
                this.fullDeck.push(this.numbers[j] + " of " + this.symbols[i]);
            }
        }
    }
    shuffle(){
        this.shuffleDeck = [];
        for(let i=0; i<this.cardAmount; i++){
            let random = Math.floor(Math.random() * this.cardAmount);
            while(this.deckOrder.includes(random)){
                random = Math.floor(Math.random() * this.cardAmount);
            }
            this.deckOrder.push(random);
            this.shuffleDeck.push(this.fullDeck[random]);
        }
    }
    deal(){
        let playerCard = [];
        let computer1Card = [];
        let computer2Card = [];
        let computer3Card = [];
        this.dealCard = [playerCard, computer1Card, computer2Card, computer3Card];

        for(let i=0; i<this.cardAmount; i++){
            this.dealCard[i%4].push(this.shuffleDeck[i]);
        }
    }
}

class Player{
    constructor(deck, playerHand, name) {
        this.deckofCard = deck;
        this.playerHand = playerHand;
        this.playerHandInitialAmount = 13;
        this.name = name;

        this.bid = "";
        this.bidNumber = "";
        this.bidSymbol = "";
        this.bidOrder = 0;
        this.win = true;
        this.bidded = false;
        this.cardIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        this.playedCard = "";
        this.playedCardNumber = 0;
        this.playedCardSymbol = 0;
        this.playedCardPriority = 0;
        this.symbols = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
        this.clubs = 0;
        this.diamonds = 0;
        this.hearts = 0;
        this.spades = 0;

        this.sort();
        this.symbolCardsAmount();
        this.hcpCalculate();
    }
    cardLeftAmount(){
        let count = 0;
        for(let i=0; i<this.playerHandInitialAmount; i++){
            if(this.playerHand[i] !== ""){
                count++;
            }
        }
        return count;
    }
    sort(){
        for(let i=0; i<this.playerHandInitialAmount-1; i++){
            for(let j=0; j<this.playerHandInitialAmount-1-i; j++){
                if(this.deckofCard.cardPosition[this.playerHand[j]] > this.deckofCard.cardPosition[this.playerHand[j+1]]){
                    let tmp = this.playerHand[j];
                    this.playerHand[j] = this.playerHand[j+1];
                    this.playerHand[j+1] = tmp;
                }
            }
        }
        for(let i=0; i<this.playerHandInitialAmount-1; i++){
            for(let j=0; j<this.playerHandInitialAmount-1-i; j++){
                let symbol1 = "";
                let symbol2 = "";
                for(let k=0; k<4; k++){
                    if(this.playerHand[j].includes(this.symbols[k])){
                        symbol1 = this.symbols[k];
                    }
                    if(this.playerHand[j+1].includes(this.symbols[k])){
                        symbol2 = this.symbols[k];
                    }
                }
                if(this.deckofCard.cardPriority[this.playerHand[j]] > this.deckofCard.cardPriority[this.playerHand[j+1]]){
                    if(symbol1 === symbol2){
                        let tmp = this.playerHand[j];
                        this.playerHand[j] = this.playerHand[j+1];
                        this.playerHand[j+1] = tmp;
                    }
                }
            }
        }
    }
    symbolCardsAmount(){
        for(let i=0; i<this.playerHandInitialAmount; i++){
            if(this.playerHand[i].includes(this.symbols[0])){
                this.clubs += 1;
            }else if(this.playerHand[i].includes(this.symbols[1])){
                this.diamonds += 1;
            }else if(this.playerHand[i].includes(this.symbols[2])){
                this.hearts += 1;
            }else if(this.playerHand[i].includes(this.symbols[3])){
                this.spades += 1;
            }
        }
    }
    hcpCalculate(){
        this.hcp = 0;
        const hcpSymbol = ["Ace", "King", "Queen", "Jack"];
        const hcpValue = {"Ace": 4, "King": 3, "Queen": 2, "Jack": 1};
        for(let i=0; i<this.playerHandInitialAmount; i++){
            for(let j=0; j<4; j++) {
                if(this.playerHand[i].includes(hcpSymbol[j])){
                    this.hcp += hcpValue[hcpSymbol[j]];
                }
            }
        }
    }
}

function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function messageUpdate(message, restart = false){
    let messageBox = document.getElementById("messageBox");
    if(restart){
        messageBox.innerHTML = message;
    }else{
        messageBox.innerHTML = message + "<br>" + messageBox.innerHTML;
    }
}

let gameArea = {
    set: async function(level, deck, computerModeName = false, cheatMode = false, computerTime = 1000){
        await sleep(500);
        this.computerTime = computerTime;
        this.computerMode = computerModeName;
        this.cheatMode = cheatMode;
        if(this.computerMode){
            this.computerModeName = "Computer";
        }else{
            this.computerModeName = "Player";
        }
        this.computerStepInAmount = 0;
        this.level = level;
        this.deck = deck;
        this.players = [
            new Player(this.deck, this.deck.dealCard[0], "Player"),
            new Player(this.deck, this.deck.dealCard[1], "Computer1"),
            new Player(this.deck, this.deck.dealCard[2], "Teammate"),
            new Player(this.deck, this.deck.dealCard[3], "Computer2"),
        ]
        // for(let i=0; i<2; i++){
        //     messageUpdate("Game Initializing", true);
        //     await sleep(500);
        //     messageUpdate("Game Initializing.", true);
        //     await sleep(500);
        //     messageUpdate("Game Initializing..", true);
        //     await sleep(500);
        //     messageUpdate("Game Initializing...", true);
        //     await sleep(500);
        // }
        messageUpdate("", true);

        // Activate all initial class to display on screen.
        let allInitialClass = document.getElementsByClassName("initial");
        for(let i=0; i<allInitialClass.length; i++) {
            allInitialClass[i].style.visibility = "visible";
        }

        // Difficulty Easy: Only 1 round of bid, player always win.
        // if(this.level === "easy"){
        //     document.getElementById("button6").classList.add("invisible");
        // }
        document.getElementById("computerStepIn").style.visibility = "hidden";
        document.getElementById("computerStepInAmount").style.visibility = "hidden";
        document.getElementById("roundEndButtonBlock").classList.add("invisible");

        // Show all the cards on screen.
        this.displayCard();

        // Initialize scoreboard, get data from local storage.
        this.scoreBoard();

        // Setup all variable for auction process.
        this.setupAuction();

        // Start auction process.
        messageUpdate("Start Auction", true);
        await this.auction();

        // Setup all variable for playing process.
        this.setupStart();
        await this.start();

        // Round end, decide next step.
        this.roundEnd();
    },
    displayCard: function(){
        function recur(element, initialPos, player, deck, cheatMode){
            let cards = document.getElementById(element).getElementsByTagName("button");
            for(let i=0; i<player.playerHandInitialAmount; i++){
                cards[i].style.visibility = "visible";
                if(element === "Teammate"){
                    cards[i].style.left = initialPos + "%";
                }else if(element === "Computer1"){
                    cards[i].style.left = "10%";
                    cards[i].style.top = initialPos + "%";
                }else if(element === "Computer2"){
                    cards[i].style.left = "80%";
                    cards[i].style.top = initialPos + "%";
                }else if(element === "Player"){
                    cards[i].style.left = initialPos + "%";
                    cards[i].style.top = "73%";
                    cards[i].style.backgroundPosition = -150*deck.cardPosition[player.playerHand[i]] + "px";
                }
                if(cheatMode){
                    cards[i].style.backgroundPosition = -150*deck.cardPosition[player.playerHand[i]] + "px";
                }
                initialPos += 2.5;
            }
        }
        recur(this.players[2].name, 30, this.players[2], this.deck, this.cheatMode);
        recur(this.players[1].name, 22, this.players[1], this.deck, this.cheatMode);
        recur(this.players[3].name, 22, this.players[3], this.deck, this.cheatMode);
        recur(this.players[0].name, 30, this.players[0], this.deck, this.cheatMode);
    },
    scoreBoard: function(){
        this.rankArray = JSON.parse(localStorage.getItem("rank"));
        if(this.rankArray === null){
            this.rankArray = [
                ["N/A", 0, 0],
                ["N/A", 0, 0],
                ["N/A", 0, 0],
                ["N/A", 0, 0],
                ["N/A", 0, 0]
            ];
        }

        let board = document.getElementById("scoreBoard");
       	for(let i=0; i<5; i++){
            let row = board.insertRow();
            let rankCell = row.insertCell(0);
            let nameCell = row.insertCell(1);
            let scoreCell = row.insertCell(2);
            let helpedCell = row.insertCell(3);

            rankCell.textContent = (i+1).toString();
            if(i < this.rankArray.length){
                nameCell.textContent = this.rankArray[i][0];
                scoreCell.textContent = this.rankArray[i][1];
                helpedCell.textContent = this.rankArray[i][2];
            }else{
                nameCell.textContent = "N/A";
                scoreCell.textContent = "0";
                helpedCell.textContent = "0";
            }

        }
    },
    setupAuction: function() {
        this.playerIndex = {"Player": 0, "Computer1": 1, "Teammate": 2, "Computer2": 3};
        this.symbols =     ["Clubs"   , "Diamonds"   , "Hearts"   , "Spades"   , "NT"];
        this.symbolValue = {"Clubs": 1, "Diamonds": 2, "Hearts": 3, "Spades": 4, "NT": 5};
        this.topNumberBid = 1;
        this.topSymbolBid = 0;
        this.kingNumber = 0;
        this.kingSymbol = "";

        document.getElementById("Choose").style.display = "block";
        for(let i=0; i<6; i++){
            let button = document.getElementById("button" + (i + 1));
            button.style.display = "inline";
        }

        for (let i = 0; i < 5; i++) {
            let button = document.getElementById("button" + (i+1));
            button.value = this.topNumberBid + " " + this.symbols[i];
        }
    },
    auction: function(){
        return new Promise(async (resolve) => {
            let currentPlayerIndex = 0;
            let lastPlayer = this.players[3];

            // Check if only one player has win = true
            while(!this.help_determineAuctionDone()){
                const currentPlayer = this.players[currentPlayerIndex];
                await this.recur_allAuctionTurn(currentPlayer, lastPlayer, currentPlayerIndex);
                await sleep(this.computerTime);

                currentPlayerIndex++;
                if(currentPlayerIndex === 4){
                    currentPlayerIndex = 0;
                }

                lastPlayer = currentPlayer;
            }
            resolve();
        });
    },
    recur_allAuctionTurn: function(player, lastPlayer, currentPlayerIndex){
        // Resolve promise iif button is clicked.
        return new Promise((resolve) => {
            for (let i = 0; i < 6; i++) {
                let button = document.getElementById("button" + (i+1));
                button.setAttribute("data-player", player.name);
                button.onclick = () => {
                    let buttonID = Number(button.getAttribute("id").substring(6));
                    this.bid = button.value;
                    this.bidNumber = Number(this.bid[0]);
                    this.bidSymbol = this.bid.substring(2);
                    let playerName = button.getAttribute("data-player");
                    let player = this.players[this.playerIndex[playerName]];

                    if (buttonID === 6) {
                        player.win = false;
                        messageUpdate(player.name + ": Pass");
                    } else {
                        // Update button value.
                        this.help_auctionUpdateNumberSymbol(player, this.bidNumber, this.bidSymbol, buttonID);
                        // Reset each all player's win when one player bid the king.
                        this.help_resetBidder();
                        messageUpdate(player.name + ": " + this.bid);
                    }
                    player.bidded = true;
                    resolve();
                }
            }

            player.bidOrder = lastPlayer.bidOrder + 1;

            // Check if player hand control to computer.
            if(player.name !== this.computerModeName) {
                let buttonNumber;
                if(this.level === "easy"){
                    buttonNumber = this.randomAIAuction(player);
                }else{
                    buttonNumber = this.improveAIAuction(player, currentPlayerIndex);
                }

                // Computer click button.
                document.getElementById("button" + buttonNumber).click();
            }
        });
    },
    randomAIAuction: function(player){
        let buttonNumber = Math.floor(Math.random() * 9) + 1;
        if(this.topNumberBid === 5 || buttonNumber >= 6 || this.level === "easy"){
            buttonNumber = 6;
        }

        // Check if is player's turn but computer is playing, avoid picking "Pass".
        if(player.name === "Player" && this.computerModeName === "Computer" && this.level === "easy"){
            buttonNumber = Math.floor(Math.random() * 5) + 1;
        }
        return buttonNumber;
    },
    improveAIAuction: function(player, currentPlayerIndex){
        let level = [
          [11, 16, 18],
          [12, 17, 19],
          [13, 18, 20],
          [14, 19, 21],
          [15, 20, 22],
          [16, 21, 23],
          [17, 22, 24]
        ];
        let buttonNumber = Math.floor(Math.random() * 6) + 1;
        let symbolAmount = [player.clubs, player.diamonds, player.hearts, player.spades];
        let largestAmount = Math.max(...symbolAmount);
        let strategySymbol = "";
        for(let i=0; i<4; i++){
            if(symbolAmount[i] === largestAmount){
                strategySymbol = player.symbols[i];
                buttonNumber = i+1;
                break;
            }
        }

        if(player.hcp >= level[this.topNumberBid - 1][0]){
            // Original 5543, improve 4433
            if(player.spades >= 4){
                buttonNumber = 4;
            }else if(player.hearts >= 4){
                buttonNumber = 3;
            }else if(player.diamonds >= 3){
                buttonNumber = 2;
            }else if(player.clubs >= 3){
                buttonNumber = 1;
            }else{
                buttonNumber = 6;
            }
        }
        if(player.hcp >= level[this.topNumberBid - 1][1] && player.hcp <= level[this.topNumberBid - 1][2]){
            // 5332, 4432, 4333 for NT
            if(((player.spades === 5 && player.hearts === 3 && player.diamonds === 3 && player.clubs === 2) ||
                (player.spades === 5 && player.hearts === 3 && player.diamonds === 2 && player.clubs === 3) ||
                (player.spades === 5 && player.hearts === 2 && player.diamonds === 3 && player.clubs === 3) ||
                (player.spades === 3 && player.hearts === 5 && player.diamonds === 3 && player.clubs === 2) ||
                (player.spades === 3 && player.hearts === 5 && player.diamonds === 2 && player.clubs === 3) ||
                (player.spades === 3 && player.hearts === 3 && player.diamonds === 5 && player.clubs === 2) ||
                (player.spades === 3 && player.hearts === 3 && player.diamonds === 2 && player.clubs === 5) ||
                (player.spades === 3 && player.hearts === 2 && player.diamonds === 5 && player.clubs === 3) ||
                (player.spades === 3 && player.hearts === 2 && player.diamonds === 3 && player.clubs === 5) ||
                (player.spades === 2 && player.hearts === 5 && player.diamonds === 3 && player.clubs === 3) ||
                (player.spades === 2 && player.hearts === 3 && player.diamonds === 5 && player.clubs === 3) ||
                (player.spades === 2 && player.hearts === 3 && player.diamonds === 3 && player.clubs === 5) ) ||

               ((player.spades === 4 && player.hearts === 4 && player.diamonds === 3 && player.clubs === 2) ||
                (player.spades === 4 && player.hearts === 4 && player.diamonds === 2 && player.clubs === 3) ||
                (player.spades === 4 && player.hearts === 3 && player.diamonds === 4 && player.clubs === 2) ||
                (player.spades === 4 && player.hearts === 3 && player.diamonds === 2 && player.clubs === 4) ||
                (player.spades === 4 && player.hearts === 2 && player.diamonds === 4 && player.clubs === 3) ||
                (player.spades === 4 && player.hearts === 2 && player.diamonds === 3 && player.clubs === 4) ||
                (player.spades === 3 && player.hearts === 4 && player.diamonds === 4 && player.clubs === 2) ||
                (player.spades === 3 && player.hearts === 4 && player.diamonds === 2 && player.clubs === 4) ||
                (player.spades === 3 && player.hearts === 2 && player.diamonds === 4 && player.clubs === 4) ||
                (player.spades === 2 && player.hearts === 4 && player.diamonds === 4 && player.clubs === 3) ||
                (player.spades === 2 && player.hearts === 4 && player.diamonds === 3 && player.clubs === 4) ||
                (player.spades === 2 && player.hearts === 3 && player.diamonds === 4 && player.clubs === 4) ) ||

               ((player.spades === 4 && player.hearts === 3 && player.diamonds === 3 && player.clubs === 3) ||
                (player.spades === 3 && player.hearts === 4 && player.diamonds === 3 && player.clubs === 3) ||
                (player.spades === 3 && player.hearts === 3 && player.diamonds === 4 && player.clubs === 3) ||
                (player.spades === 3 && player.hearts === 3 && player.diamonds === 3 && player.clubs === 4) )
            ){
                buttonNumber = 5;
            }
        }

        // TODO: Consideration for other player's bid
        if(player.bidOrder !== 1){

        }

        // Temp fail safe
        if(this.topNumberBid >= 3){
            buttonNumber = 6;
        }

        return buttonNumber;
    },
    help_resetBidder: function(){
        for(let i=0; i<4; i++){
            this.players[i].win = true;
            this.players[i].bidded = false;
            this.players[i].bidOrder = 0;
        }
    },
    help_buttonNaming: function(currentNumberBid, buttonID){
        for(let i=0; i<5; i++){
            if(i < buttonID){
                document.getElementById("button" + (i+1)).value = (currentNumberBid + 1) + " " + this.symbols[i];
            }else{
                document.getElementById("button" + (i+1)).value = currentNumberBid + " " + this.symbols[i];
            }
        }
    },
    help_auctionUpdateNumberSymbol: function(player, currentNumberBid, currentSymbolBid, buttonID){
        let currentSymbolBidValue = this.symbolValue[currentSymbolBid];
        if(currentNumberBid > this.topNumberBid){
            this.topNumberBid = currentNumberBid;
            this.topSymbolBid = currentSymbolBidValue;
            this.help_buttonNaming(this.topNumberBid, buttonID);
        }else if(currentNumberBid === this.topNumberBid){
            if(currentSymbolBidValue > this.topSymbolBid){
                this.topSymbolBid = currentSymbolBidValue;
                this.help_buttonNaming(this.topNumberBid, buttonID);
            }
        }
    },
    help_determineAuctionDone: function(){
        if(!this.players[0].win && !this.players[1].win && !this.players[2].win && !this.players[3].win &&
            (this.players[0].bidded && this.players[1].bidded && this.players[2].bidded && this.players[3].bidded)){
            messageUpdate("Everyone Passed. Deal cards again!!!", true);
            this.restart();
        }else if( ((this.players[0].win && !(this.players[1].win || this.players[2].win || this.players[3].win))
        ||  (this.players[1].win && !(this.players[0].win || this.players[2].win || this.players[3].win))
        ||  (this.players[2].win && !(this.players[0].win || this.players[1].win || this.players[3].win))
        ||  (this.players[3].win && !(this.players[0].win || this.players[1].win || this.players[2].win))) &&
            (this.players[0].bidded && this.players[1].bidded && this.players[2].bidded && this.players[3].bidded)
        ){
            // Set the final bid king number and symbol.
            this.kingNumber = this.topNumberBid;
            this.kingSymbol = this.symbols[this.topSymbolBid - 1];
            this.toWin =  0;

            let king = document.getElementById("king");
            king.innerHTML = this.kingSymbol;
            messageUpdate("The king is " + this.kingSymbol + ".", true);
            for(let i=0; i<4; i++){
                if(this.players[i].win){
                    messageUpdate("Bidder is " + this.players[i].name);
                    if(this.players[i].name === "Computer1" || this.players[i].name === "Computer2"){
                        this.toWin =  14 - this.kingNumber - 6;
                    }
                    if(this.players[i].name === "Player" || this.players[i].name === "Teammate"){
                        this.toWin =  this.kingNumber + 6;
                    }
                }
            }


            messageUpdate("You have to win " + this.toWin + " rounds.");
            messageUpdate("GAME START!!!");

            // Remove all auction button.
            document.getElementById("Choose").style.display = "none";
            for(let i=0; i<6; i++){
                let button = document.getElementById("button" + (i + 1));
                button.style.display = "none";
            }
            return true;
        }
        return false;
    },
    setupStart: function(){
        this.currentRoundSymbol = "";
        this.winner = this.players[0];
        this.point = 0;
    },
    start: function(){
        return new Promise(async (resolve) => {
            let currentPlayerIndex = 0;
            let condition = true;

            // Check all player card played all their cards.
            while (!(this.players[0].cardLeftAmount() === 0 && this.players[1].cardLeftAmount() === 0 && this.players[2].cardLeftAmount() === 0 && this.players[3].cardLeftAmount() === 0)) {
                if (currentPlayerIndex === 0) {
                    if (condition) {
                        this.help_decideOrder(true);
                        messageUpdate(this.playOrder[0].name + " goes first.");
                        condition = false;
                    } else {
                        this.help_decideOrder(false);
                        messageUpdate(this.playOrder[0].name + "'s turn.", true);
                    }
                }

                const currentPlayer = this.playOrder[currentPlayerIndex];
                await this.recur_allGameTurn(currentPlayer, currentPlayerIndex);
                await sleep(this.computerTime);

                if (currentPlayerIndex === 0) {
                    this.help_checkFirstCardSymbol(currentPlayer);
                }

                currentPlayerIndex++;
                if (currentPlayerIndex === 4) {
                    this.help_computeWinner();
                    this.currentRoundSymbol = "";
                    await sleep(this.computerTime);
                    for (let i = 0; i < 4; i++) {
                        document.getElementById(this.players[i].name + "Hand").classList.add("invisible") ;
                    }
                    await sleep(this.computerTime);
                    currentPlayerIndex = 0;
                }
            }
            resolve();
        });
    },
    recur_allGameTurn: function(player, currentPlayerIndex){
        // Resolve promise iif button is clicked.
        return new Promise((resolve) => {
            // RULE: Make sure only play card that has the same symbol,
            //       iif don't have the symbol in the player hand, play other card
            let listOfIndexForPlayableCard = this.help_playCardRule(player);
            let timeToThink = 100;
            let click = true;

            let cards =  document.getElementById(player.name).getElementsByTagName('button');
            for(let i=0; i<player.playerHandInitialAmount; i++){
                // This provides visual support for player to know which cards are available to play.
                if(listOfIndexForPlayableCard.includes(i)){
                    // Make the card move up for player to see playable card.
                    if(player.name === "Player"){
                        cards[i].style.top = "71%";
                    }
                    cards[i].style.cursor = "pointer";
                    cards[i].disabled = false;
                }else{
                    cards[i].style.cursor = "not-allowed";
                }

                // TODO: Make card dragable
                cards[i].onclick = () => {
                    timeToThink = 0;
                    click = false;
                    for(let j=0; j<player.playerHandInitialAmount; j++){
                        if(player.name === "Player") {
                            cards[j].style.top = "73%";
                        }
                        cards[j].style.cursor = "not-allowed";
                        cards[j].disabled = true;
                    }
                    // Remove card from table.
                    cards[i].style.visibility = "hidden";

                    // Show the card played on the table.
                    document.getElementById(player.name + "Hand").classList.remove("invisible") ;
                    document.getElementById(player.name + "Hand").style.visibility = "visible";
                    document.getElementById(player.name + "Hand").style.backgroundPosition = -150*this.deck.cardPosition[player.playerHand[i]] + "px";

                    // Move card from player hand to played card.
                    player.playedCard = player.playerHand[i];
                    player.playerHand[i] = "";

                    // Remove the played card index from array.
                    player.cardIndex.splice(player.cardIndex.indexOf(i-1), player.cardIndex.indexOf(i-1));

                    // Add the played card's symbol to playedCardNumber
                    player.playedCardNumber = this.deck.cardValue[player.playedCard];

                    // Add the played card's symbol to playedCardSymbol
                    for(let j=0; j<4; j++){
                        if(player.playedCard.includes(this.symbols[j])){
                            player.playedCardSymbol = this.symbols[j];
                        }
                    }

                    // Add the priority of the played card to playedCardPriority.
                    player.playedCardPriority = this.deck.cardPriority[player.playedCard];

                    resolve();
                }
            }
            if(player.name === "Player"){
                let canvas = document.getElementById("timeCountDownCanvas");
                let canvasContext = canvas.getContext("2d");
                timeToThink = 10;

                let timer = setInterval(() => {
                    canvasContext.clearRect(0, 0, 100, 10);
                    if(timeToThink <= 0){
                        clearInterval(timer);

                        if(click){
                            listOfIndexForPlayableCard = this.improveAIGame(player, currentPlayerIndex, listOfIndexForPlayableCard);
                            let buttonNumber = this.randomAIGame(player, listOfIndexForPlayableCard);

                            // Computer click button.
                            this.computerStepInAmount += 1;
                            document.getElementById(player.name + buttonNumber).click();
                        }
                    }
                    timeToThink -= 0.1;
                    canvasContext.beginPath();
		            canvasContext.rect(0, 0, timeToThink*10, 10);
                    canvasContext.closePath();
                    canvasContext.fillStyle= "lightskyblue";
                    canvasContext.fill();
                    canvasContext.beginPath();
		            canvasContext.rect(timeToThink*10, 0, 100, 10);
                    canvasContext.closePath();
                    canvasContext.fillStyle= "darkgray";
                    canvasContext.fill();
                }, 100);
            }

            // Check if player hand control to computer.
            if(player.name !== this.computerModeName) {
                listOfIndexForPlayableCard = this.improveAIGame(player, currentPlayerIndex, listOfIndexForPlayableCard);
                let buttonNumber = this.randomAIGame(player, listOfIndexForPlayableCard);

                // Computer click button.
                document.getElementById(player.name + buttonNumber).click();
            }
        });
    },
    randomAIGame: function(player, listOfIndexForPlayableCard){
        let buttonNumber = Math.floor(Math.random() * 13) + 1;
        while(player.playerHand[buttonNumber-1] === "" || !listOfIndexForPlayableCard.includes(buttonNumber-1)){
            buttonNumber = Math.floor(Math.random() * 13) + 1;
        }
        if(listOfIndexForPlayableCard.length !== 13){
            buttonNumber = listOfIndexForPlayableCard[listOfIndexForPlayableCard.length-1] + 1;
        }
        return buttonNumber;
    },
    improveAIGame: function(player, currentPlayerIndex, listOfIndexForPlayableCard){
        function comparePriority(listOfIndexForPlayableCard, wholeCardPriority, thisPlayersHand, comparedPriority= 0, king= "", other= false){
            if(other || king !== ""){
                comparedPriority = 13;
            }
            let newList = [];
            let tmpMinPriority = 14;
            let tmpMin = 0;
            for(let i=0; i <listOfIndexForPlayableCard.length; i++){
                let cardToPlayIndex = listOfIndexForPlayableCard[i];
                if(wholeCardPriority[thisPlayersHand[cardToPlayIndex]] > comparedPriority){
                    newList.push(cardToPlayIndex);
                }
                if(king !== ""){
                    if(thisPlayersHand[cardToPlayIndex].includes(king)){
                        newList.push(cardToPlayIndex);
                        break;
                    }
                }
                if(other){
                    if(wholeCardPriority[thisPlayersHand[cardToPlayIndex]] < tmpMinPriority){
                        tmpMinPriority = wholeCardPriority[thisPlayersHand[cardToPlayIndex]];
                        tmpMin = cardToPlayIndex;
                    }
                }
            }
            if(other){
                for(let i=0; i <listOfIndexForPlayableCard.length; i++){
                    let cardToPlayIndex = listOfIndexForPlayableCard[i];
                    if(wholeCardPriority[thisPlayersHand[cardToPlayIndex]] === tmpMinPriority){
                        newList.push(cardToPlayIndex);
                    }
                }
            }

            if(newList.length === 0){
                newList = [listOfIndexForPlayableCard[0]];
            }
            return newList;
        }

        let conditionCurrent = false;
        for(let i=0; i<listOfIndexForPlayableCard.length; i++){
            if(!player.playerHand[listOfIndexForPlayableCard[i]].includes(this.currentRoundSymbol)){
                conditionCurrent = true;
                break;
            }
        }

        let conditionKing = false;
        for(let i=0; i<listOfIndexForPlayableCard.length; i++){
            if(!player.playerHand[listOfIndexForPlayableCard[i]].includes(this.kingSymbol)){
                conditionKing = true;
                break;
            }
        }

        let newList = [];
        if(currentPlayerIndex === 1){
            if(this.kingSymbol === "NT"){

            }
            if(this.currentRoundSymbol === this.kingSymbol){
                if(conditionCurrent){
                    newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, 13, "", true);  // Play low priority other card
                }else{
                    newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, this.playOrder[0].playedCardPriority, "", false);
                }
            }
            if(this.currentRoundSymbol !== this.kingSymbol){
                if(conditionCurrent){
                    if(conditionKing){
                        newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, 13, "", true);  // Play low priority other card
                    }else{
                        newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, 13, this.kingSymbol, false);  // Play low priority king card
                    }
                }else{
                    newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, this.playOrder[0].playedCardPriority, "", false);
                }
            }
        }
        if(currentPlayerIndex === 2){
            if(this.currentRoundSymbol === this.kingSymbol){
                if(this.playOrder[1].playedCardSymbol === this.currentRoundSymbol){
                    if(conditionCurrent){
                        newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, 13, "", true); // Play low priority other card
                    }else{
                        if(this.playOrder[0].playedCardPriority > this.playOrder[1].playedCardPriority){
                            newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, this.playOrder[0].playedCardPriority, "", false);
                        }
                        if(this.playOrder[1].playedCardPriority > this.playOrder[0].playedCardPriority){
                            newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, this.playOrder[1].playedCardPriority, "", false); // Play low priority same card
                        }
                    }
                }
                if(this.playOrder[1].playedCardSymbol !== this.currentRoundSymbol){
                    if(conditionCurrent){
                        newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, 13, "", true); // Play low priority other card
                    }else{
                        newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, 13, "", false); // Play low priority same card
                    }
                }
            }
            // Not done
            if(this.currentRoundSymbol !== this.kingSymbol){
                if(this.playOrder[1].playedCardSymbol === this.currentRoundSymbol){
                    if(conditionCurrent){
                        newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, 13, this.kingSymbol, false); // Play low priority king card
                    }else{
                        if(this.playOrder[0].playedCardPriority > this.playOrder[1].playedCardPriority){
                            newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, this.playOrder[0].playedCardPriority, "", false);
                        }
                        if(this.playOrder[1].playedCardPriority > this.playOrder[0].playedCardPriority) {
                            newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, this.playOrder[1].playedCardPriority, "", false);
                        }
                    }
                }
                // Not done
                if(this.playOrder[1].playedCardSymbol !== this.currentRoundSymbol){
                    // Not done
                    if(this.playOrder[1].playedCardSymbol === this.kingSymbol){
                        if(conditionCurrent){
                            if(conditionKing){
                                newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, 13, "", true); // Play low priority other card
                            }else{
                                let tmp = [];
                                for(let i=0; i <listOfIndexForPlayableCard.length; i++){
                                    if(player.playerHand[listOfIndexForPlayableCard[i]].includes(this.kingSymbol)){
                                        if(this.deck.cardPriority[player.playerHand[listOfIndexForPlayableCard[i]]] > this.playOrder[1].playedCardPriority){
                                            newList.push(listOfIndexForPlayableCard[i]);
                                        }
                                    }else{
                                        tmp.push(listOfIndexForPlayableCard[i]);
                                    }
                                }
                                if(newList.length === 0){
                                    newList = comparePriority(tmp, this.deck.cardPriority, player.playerHand, 13, "", true); // Play low priority other card
                                }
                            }
                        }else{
                            newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, 13, "", false); // Play low priority same card
                        }
                    }
                    if(this.playOrder[1].playedCardSymbol !== this.kingSymbol){
                        if(conditionCurrent){
                            if(conditionKing){
                                newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, 13, "", true); // Play low priority other card
                            }else{
                                newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, 13, this.kingSymbol, false); // Play low priority king card
                            }
                        }else{
                            newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, 13, "", false); // Play low priority same card
                        }
                    }
                }
            }
        }
        if(currentPlayerIndex === 3){
            if(this.currentRoundSymbol === this.kingSymbol){
                if(this.playOrder[1].playedCardSymbol === this.currentRoundSymbol){
                    if(this.playOrder[2].playedCardSymbol === this.currentRoundSymbol){
                        if(conditionCurrent){
                            newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, 13, "", true); // Play low priority other card
                        }else{
                            if(this.playOrder[0].playedCardPriority > this.playOrder[1].playedCardPriority && this.playOrder[1].playedCardPriority > this.playOrder[2].playedCardPriority){
                                newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, this.playOrder[0].playedCardPriority, "", false);
                            }
                            if(this.playOrder[2].playedCardPriority > this.playOrder[1].playedCardPriority && this.playOrder[1].playedCardPriority > this.playOrder[0].playedCardPriority){
                                newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, this.playOrder[2].playedCardPriority, "", false);
                            }
                            if(this.playOrder[1].playedCardPriority > this.playOrder[0].playedCardPriority && this.playOrder[1].playedCardPriority > this.playOrder[2].playedCardPriority){
                                newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, 13, "", false); // Play low priority same card
                            }
                            if(this.playOrder[0].playedCardPriority > this.playOrder[1].playedCardPriority && this.playOrder[2].playedCardPriority > this.playOrder[1].playedCardPriority){
                                if(this.playOrder[0].playedCardPriority > this.playOrder[2].playedCardPriority){
                                    newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, this.playOrder[0].playedCardPriority, "", false);
                                }
                                if(this.playOrder[2].playedCardPriority > this.playOrder[0].playedCardPriority){
                                    newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, this.playOrder[2].playedCardPriority, "", false);
                                }
                            }
                        }
                    }
                    if(this.playOrder[2].playedCardSymbol !== this.currentRoundSymbol){
                        if(conditionCurrent){
                            newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, 13, "", true); // Play low priority other card
                        }else{
                            if(this.playOrder[0].playedCardPriority < this.playOrder[1].playedCardPriority){
                                newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, 13, "", false); // Play low priority same card
                            }else if(this.playOrder[0].playedCardPriority > this.playOrder[1].playedCardPriority){
                                newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, this.playOrder[0].playedCardPriority, "", false);
                            }
                        }
                    }
                }
                if(this.playOrder[1].playedCardSymbol !== this.currentRoundSymbol){
                        if(this.playOrder[2].playedCardSymbol === this.currentRoundSymbol){
                            if(conditionCurrent){
                                newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, 13, "", true); // Play low priority other card
                            }else{
                                if(this.playOrder[0].playedCardPriority < this.playOrder[2].playedCardPriority){
                                    newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, this.playOrder[2].playedCardPriority, "", false);
                                }
                                if(this.playOrder[0].playedCardPriority > this.playOrder[2].playedCardPriority){
                                    newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, this.playOrder[0].playedCardPriority, "", false);
                                }
                            }
                        }
                        if(this.playOrder[2].playedCardSymbol !== this.currentRoundSymbol){
                            if(conditionCurrent){
                                newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, 13, "", true); // Play low priority other card
                            }else{
                                newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, this.playOrder[0].playedCardPriority, "", false);
                            }
                        }
                    }
            }
            // Not done
            if(this.currentRoundSymbol !== this.kingSymbol){
                if(this.playOrder[1].playedCardSymbol === this.currentRoundSymbol){
                    if(this.playOrder[2].playedCardSymbol === this.currentRoundSymbol){
                        if(conditionCurrent){
                            if(conditionKing){
                                newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, 13, "", true); // Play low priority other card
                            }else{
                                newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, 13, this.kingSymbol, false); // Play low priority king card
                            }
                        }else{
                            if(this.playOrder[1].playedCardPriority > this.playOrder[0].playedCardPriority && this.playOrder[1].playedCardPriority > this.playOrder[2].playedCardPriority){
                                newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, 13, "", false); // Play low priority same card
                            }
                            if(this.playOrder[1].playedCardPriority < this.playOrder[0].playedCardPriority && this.playOrder[1].playedCardPriority > this.playOrder[2].playedCardPriority){
                                newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, this.playOrder[0].playedCardPriority, "", false);
                            }
                            if(this.playOrder[1].playedCardPriority > this.playOrder[0].playedCardPriority && this.playOrder[1].playedCardPriority < this.playOrder[2].playedCardPriority){
                                newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, this.playOrder[2].playedCardPriority, "", false);
                            }
                            if(this.playOrder[1].playedCardPriority < this.playOrder[0].playedCardPriority && this.playOrder[1].playedCardPriority < this.playOrder[2].playedCardPriority){
                                if(this.playOrder[0].playedCardPriority > this.playOrder[2].playedCardPriority){
                                    newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, this.playOrder[0].playedCardPriority, "", false);
                                }
                                if(this.playOrder[2].playedCardPriority > this.playOrder[0].playedCardPriority){
                                    newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, this.playOrder[2].playedCardPriority, "", false);
                                }
                            }
                        }
                    }
                    if(this.playOrder[2].playedCardSymbol !== this.currentRoundSymbol){
                        if(this.playOrder[2].playedCardSymbol === this.kingSymbol){
                            if(conditionCurrent){
                                if(conditionKing){
                                    newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, 13, "", true); // Play low priority other card
                                }else{
                                    newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, this.playOrder[2].playedCardPriority, "", false);
                                }
                            }else{
                                newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, 13); // Play low priority same card
                            }
                        }
                        if(this.playOrder[2].playedCardSymbol !== this.kingSymbol){
                            if(this.playOrder[0].playedCardPriority > this.playOrder[1].playedCardPriority){
                                newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, this.playOrder[0].playedCardPriority, "", false);
                            }
                            if(this.playOrder[1].playedCardPriority > this.playOrder[0].playedCardPriority){
                                newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, this.playOrder[1].playedCardPriority, "", false);
                            }
                        }
                    }
                }
                // Not done
                if(this.playOrder[1].playedCardSymbol !== this.currentRoundSymbol){
                    if(this.playOrder[1].playedCardSymbol === this.kingSymbol){
                        if(this.playOrder[2].playedCardSymbol === this.currentRoundSymbol){
                            if(conditionCurrent){
                                if(conditionKing){
                                    newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, 13, "", true); // Play low priority other card
                                }else{
                                    newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, this.playOrder[1].playedCardPriority, "", false);
                                }
                            }else{
                                if(this.playOrder[0].playedCardPriority > this.playOrder[2].playedCardPriority){
                                    newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, this.playOrder[1].playedCardPriority, "", false);
                                }
                                if(this.playOrder[2].playedCardPriority > this.playOrder[0].playedCardPriority){
                                    newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand,  this.playOrder[2].playedCardPriority, "", false);
                                }
                            }
                        }
                        if(this.playOrder[2].playedCardSymbol !== this.currentRoundSymbol){
                            if(this.playOrder[2].playedCardSymbol === this.kingSymbol){
                                if(conditionCurrent){
                                    if(conditionKing){
                                        newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, 13, "", true); // Play low priority other card
                                    }else{
                                        if(this.playOrder[2].playedCardPriority > this.playOrder[1].playedCardPriority){
                                            newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, this.playOrder[2].playedCardPriority, "", false);
                                        }
                                        if(this.playOrder[1].playedCardPriority > this.playOrder[2].playedCardPriority){
                                            newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, this.playOrder[1].playedCardPriority, "", false);
                                        }
                                    }
                                }else{
                                    newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, 13, "", false); // Play low priority same card
                                }
                            }
                            if(this.playOrder[2].playedCardSymbol !== this.kingSymbol){
                                if(conditionCurrent){
                                    if(conditionKing){
                                        newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, 13, "", true); // Play low priority other card
                                    }else{
                                        newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, this.playOrder[1].playedCardPriority, "", false);
                                    }
                                }else{
                                    newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, 13, "", false); // Play low priority same card
                                }
                            }
                        }
                    }
                    // Not done
                    if(this.playOrder[1].playedCardSymbol !== this.kingSymbol){
                        if(this.playOrder[2].playedCardSymbol === this.currentRoundSymbol){
                            if(conditionCurrent){
                                if(this.playOrder[0].playedCardPriority > this.playOrder[2].playedCardPriority){
                                    newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, this.playOrder[0].playedCardPriority, "", false);
                                }
                                if(this.playOrder[2].playedCardPriority > this.playOrder[0].playedCardPriority){
                                    newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, this.playOrder[2].playedCardPriority, "", false);
                                }
                            }else{
                                newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, this.playOrder[0].playedCardPriority, "", false);
                            }
                        }
                        // Not done
                        if(this.playOrder[2].playedCardSymbol !== this.currentRoundSymbol){
                            // Not done
                            if(this.playOrder[2].playedCardSymbol === this.kingSymbol){
                                if(conditionCurrent){
                                    if(conditionKing){
                                        newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, 13, "", true); // Play low priority other card
                                    }else{
                                        let tmp = [];
                                        for(let i=0; i <listOfIndexForPlayableCard.length; i++){
                                            if(player.playerHand[listOfIndexForPlayableCard[i]].includes(this.kingSymbol)){
                                                if(this.deck.cardPriority[player.playerHand[listOfIndexForPlayableCard[i]]] > this.playOrder[1].playedCardPriority){
                                                    newList.push(listOfIndexForPlayableCard[i]);
                                                }
                                            }else{
                                                tmp.push(listOfIndexForPlayableCard[i]);
                                            }
                                        }
                                        if(newList.length === 0){
                                            newList = comparePriority(tmp, this.deck.cardPriority, player.playerHand, 13, "", true); // Play low priority other card
                                        }
                                    }
                                }else{
                                    newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, this.playOrder[0].playedCardPriority, "", false);
                                }
                            }
                            if(this.playOrder[2].playedCardSymbol !== this.kingSymbol){
                                if(conditionCurrent){
                                    if(conditionKing){
                                        newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, 13, "", true); // Play low priority other card
                                    }else{
                                        newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, 13, this.kingSymbol, false); // Play low priority king card
                                    }
                                }else{
                                    newList = comparePriority(listOfIndexForPlayableCard, this.deck.cardPriority, player.playerHand, this.playOrder[0].playedCardPriority, "", false);
                                }
                            }
                        }
                    }
                }
            }
        }

        if(newList.length === 0){
            newList = listOfIndexForPlayableCard;
        }

        return newList;
    },
    help_playCardRule: function(player){
        let listOfIndexForPlayableCard = [];
        for(let i=0; i<player.playerHandInitialAmount; i++){
            if(player.playerHand[i].includes(this.currentRoundSymbol) || this.currentRoundSymbol === ""){
                listOfIndexForPlayableCard.push(i);
            }
        }
        if(listOfIndexForPlayableCard.length === 0){
            for(let i=0; i<player.playerHandInitialAmount; i++) {
                if(player.playerHand[i] !== "" && player.playerHand[i].includes(this.kingSymbol)){
                    listOfIndexForPlayableCard.push(i);
                }else if(player.playerHand[i] !== ""){
                    listOfIndexForPlayableCard.push(i);
                }
            }
        }
        return listOfIndexForPlayableCard;
    },
    help_decideOrder: function(first){
        this.playOrder = [];
        let condition = false;
        let tempMem = 0;
        for(let i=0; i<4; i++){
            if(this.players[i].win && !first){
                condition = true;
                tempMem = i;
            }

            if(condition){
                this.playOrder.push(this.players[i]);
            }

            if(this.players[i].win && first){
                condition = true;
                tempMem = i;
            }
        }
        for(let i=0; i<=tempMem; i++){
            this.playOrder.push(this.players[i]);
        }

        // Reset player.win.
        for(let i=0; i<4; i++) {
            this.players[i].win = false;
        }
    },
    help_checkFirstCardSymbol: function(player){
        this.currentRoundSymbol = player.playedCardSymbol;
    },
    help_computeWinner: function(){
        this.winner = this.playOrder[0];
        for(let i=1; i<4; i++){
            if(this.playOrder[i].playedCardSymbol === this.currentRoundSymbol || this.playOrder[i].playedCardSymbol === this.kingSymbol){
                if(this.winner.playedCardSymbol === this.kingSymbol && this.playOrder[i].playedCardSymbol === this.kingSymbol){
                    if(this.winner.playedCardPriority < this.playOrder[i].playedCardPriority){
                        this.winner = this.playOrder[i];
                    }
                }else if(this.winner.playedCardSymbol !== this.kingSymbol && this.playOrder[i].playedCardSymbol === this.kingSymbol){
                    this.winner = this.playOrder[i];
                }else if(this.winner.playedCardSymbol !== this.kingSymbol && this.playOrder[i].playedCardSymbol !== this.kingSymbol){
                    if(this.winner.playedCardPriority < this.playOrder[i].playedCardPriority){
                        this.winner = this.playOrder[i];
                    }
                }
            }
        }
        for(let i=0; i<4; i++) {
            if(this.winner.name === this.players[i].name){
                this.players[i].win = true;
            }
        }

        if(this.winner.name === this.players[0].name || this.winner.name === this.players[2].name){
            messageUpdate("Round Winner: You and Teammate");
            this.point += 1;
        }else{
            messageUpdate("Round Winner: Computer 1&2");
        }
        let roundWins = document.getElementById("teamRoundWinScore");
        roundWins.innerHTML = this.point;
    },
    roundEnd: function(){
        let scoreNumber = document.getElementById("scoreNumber");
        if (this.point >= this.toWin) {
            scoreNumber.innerHTML = (Number(scoreNumber.innerHTML) + 1).toString();
            messageUpdate("Game Won", true);
        } else {
            messageUpdate("Game Lost", true);
        }

        document.getElementById("computerStepIn").style.visibility = "visible";
        document.getElementById("computerStepInAmount").style.visibility = "visible";
        document.getElementById("computerStepInAmount").innerHTML = this.computerStepInAmount;

        document.getElementById("roundEndButtonBlock").classList.remove("invisible");
        document.getElementById("nextGame").onclick = () => {
            this.restart();
        }

        let name = JSON.parse(localStorage.getItem("name"));
        let currArray = [name, Number(scoreNumber.innerHTML), this.computerStepInAmount];
        let condition = true;
        for (let i = 0; i < this.rankArray.length; i++) {
            if (currArray[0] === this.rankArray[i][0] && currArray[1] === this.rankArray[i][1]) {
                condition = false;
            }
        }
        if(currArray[1] === 0){
            condition = false;
        }
        let saveGame = document.getElementById("saveGame");
        saveGame.disabled = !condition;

        saveGame.onclick = () => {
            if (!this.rankArray.includes(currArray)) {
                for (let i = 0; i < this.rankArray.length; i++) {
                    if (currArray[1] > this.rankArray[i][1]) {
                        this.rankArray.splice(i, 0, currArray);
                        break;
                    }
                }
                if (!this.rankArray.includes(currArray)) {
                    this.rankArray.push(currArray);
                }
                if (this.rankArray.length > 5) {
                    this.rankArray.pop();
                }
                this.help_resetScoreBoard();
                localStorage.setItem('rank', JSON.stringify(this.rankArray));
                saveGame.disabled = true;
                this.scoreBoard();
            }
        }
        // document.getElementById("endGame").onclick = () => {
        //     window.close();
        // }
    },
    help_resetScoreBoard: function (){
        let board = document.getElementById("scoreBoard");
        board.deleteRow(5);
        board.deleteRow(4);
        board.deleteRow(3);
        board.deleteRow(2);
        board.deleteRow(1);
    },
    restart: function (){
        this.help_resetScoreBoard();
        this.set(this.level, new cardDeck(), this.computerMode, this.cheatMode, this.computerTime);
    }
}

window.onload = function(){
    let computerMode = JSON.parse(localStorage.getItem("computerMode"));
    let cheatMode = JSON.parse(localStorage.getItem("cheatMode"));
    let computerTime = JSON.parse(localStorage.getItem("computerSpeed"));

    gameArea.set(JSON.parse(localStorage.getItem("Level")), new cardDeck(), computerMode, cheatMode, computerTime);
}