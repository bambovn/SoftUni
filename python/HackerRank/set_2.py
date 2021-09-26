n = int(input())
s = set(map(int, input().split()))

number_of_operations = int(input())


for _ in range(number_of_operations):
    user_input = input().split()
    command = user_input[0]

    if command == 'pop':
        s.pop()

    elif command == 'remove':
        s.remove(int(user_input[1]))

    elif command == 'discard':
        s.discard(int(user_input[1]))


print(sum(s))
