
        //Conditionals pg 92
        //if statements
        var name = "Sinclair";
        console.log("Hello " + name);
        if (name.length > 7) {
            console.log("Wow, you have a REALLY long name!");
        }

        //if ... else statements
        else {
            console.log("Your name isn't very long");
        }

        //Chaining if...else statements
        var lemonChicken = false;
        var beefWithBlackBean = true;
        var sweetAndSourPork = true;

        if (lemonChicken) {
            console.log("Great! I'm having lemon chicken!");
        } else if (beefWithBlackBean) {
            console.log("I'm having the beef.");
        } else if (sweetAndSourPork) {
            console.log("OK, I'll have the pork.");
        } else {
            console.log("Well, I guess I'll have rice then.");
        }

        //Mini challenge
            /*Write a program with a name variable. If name is your name,
    print out Hello me!; otherwise, print Hello stranger!. (Hint:
    Use === to compare name to your name.)
    */
        var name = true;
        var newName = false;
        var yourName = true;
        console.log(name === yourName);

        if (yourName) {
            console.log("Hello me!");
        } else {
            console.log("Hello stranger!");
        }


        //While loops pg. 97
        var dogsCounted = 0;
            while (dogsCounted < 10) {
                console.log("I have counted " + dogsCounted + " dogs!");
                dogsCounted++;
            }
            console.log("Baaaaarrrrrkkkk");


            //Mini challenge
            //Write a loop to print the powers of 3 under 10,000
            for (var x = 3; x < 10000; x = x * 3) {
                console.log(x);
            }

            //Challenges
            //Awesome animals: Write a for loop that modifies an array of animals, making them awesome!
            var animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];
            for (var i = 0; i < animals.length; i++) {
                console.log("Awesome " + animals[i]);
            } 

            //Random string generator: 
            /*Make a random string generator. You’ll need to start with a
string containing all the letters in the alphabet. 
            */
           var alphabet = "abcdefghijklmnopqrstuvwxyz";
           var randomLetter = Math.floor(Math.random() * alphabet.length);
           var randomString = ""
           while (randomString < 6) {
            randomLetter++;
           }