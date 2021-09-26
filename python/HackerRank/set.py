total_count_of_stamps = int(input())

list =[]
for country in range(total_count_of_stamps):
    user_input = input()
    list.append(user_input)
    
print(len(set(list)))