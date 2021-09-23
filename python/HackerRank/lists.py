if __name__ == '__main__':
    list = []

number_of_commands = int(input())
list = []

for _ in range(number_of_commands):
    user_input = input().split(" ")

    command = user_input[0]
    if command == "insert":
        list.insert(int(user_input[1]), int(user_input[2]))
    elif command == "print":
        print(list)
    elif command == "remove":
        list.remove(int(user_input[1]))
    elif command == "append":
        list.append(int(user_input[1]))
    elif command == "sort":
        list.sort()
    elif command == "pop":
        list.pop()
    elif command == "reverse":
        list.reverse()
