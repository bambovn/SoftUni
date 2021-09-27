number_of_operations = int(input())

for _ in range(number_of_operations):
    try:
        a = int(input())
        b = int(input())

        print(a // b)

    except Exception as e:
        print(f'Error Code: {e}')
