# Password Generator Starter Code

In this README, I'm going to walk you through how I created a random password generator with JavaScript. We'll cover how I used variables to hold information, conditional statements to check user input, and a for loop to generate a random set of characters based on user input.

First I created a set of arrays for the different character types a user could potentially use. These character types include lowercase letters, uppercase letters, numbers, and special characters.

Next I created a series of variables to hold the user's input. These variables include the length of the desired password, whether or not to use lowercase letters, uppercase letters, numbers, and/or special characters.

Once all of the variables were set up, I used a series of conditional statements to check the user's input and make sure it was valid. For example, I checked to see if the length of the password was between 8 and 128 characters. If not, an error message would pop up telling the user that they needed to choose a password length within that range.

After all of the input was validated, I used a for loop to generate a random set of characters based on the user's specifications. The loop would run until it reached the desired length, at which point it would stop and the password would be generated.

Once that password was generated, we passed it into a function that would display it on the screen so the user could see it.

Here is the end result:

![Screen Shot](./password%20generator.png)
