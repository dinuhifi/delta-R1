size = int(input("Enter the size of Tic-Tac-toe Grid: "))

for i in range((size*2)-1):
    for j in range((size*2)-1):
        if i%2 == 0:
            if j%2 == 0:
                print(" ", end=" ")
            else:
                print("|", end=" ")
        else:
            if j%2 == 0:
                print("-", end=" ")
            else:
                print(" ", end=" ")
    print()

