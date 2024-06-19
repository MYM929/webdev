import random

while True:
    choices = ["rock","paper","scissors"]

    computer = random.choice(choices)
    player = None

    while player not in choices:
        player = input("rock, paper, or scissors?: ").lower()

    print("Computer: ", computer)
    print("Player: ", player)

    if player == computer:
        print("Tie")
    elif player == "rock":
        if computer == "paper":
            print("You lose")
        if computer == "scissors":
            print("You win")
    elif player == "scissors":
        if computer == "rock":
            print("You lose")
        if computer == "paper":
            print("You win")
    elif player == "paper":
        if computer == "scissors":
            print("You lose")
        if computer == "rock":
            print("You win")
    
    play_again = input("Play again? (yes/no)").lower()
    if play_again != "yes":
        break #leave the loop

print("Bye")