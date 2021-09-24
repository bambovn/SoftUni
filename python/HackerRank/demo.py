number_of_students = int(input())

students = {}
for i in range(number_of_students):
    user_input = input().split(' ')
    student_name = user_input[0]

    if student_name not in students:
        students[student_name] = []
        for i in range(1, len(user_input)):
            students[student_name].append(float(user_input[i]))

user_input = input()
result = sum(students[user_input]) / len(students[user_input])

print(f'{result:.2f}')
