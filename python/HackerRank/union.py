a = int(input())

list1 = set(map(int, input().split()))

b = int(input())

list2 = set(map(int, input().split()))

total_number = list1.symmetric_difference(list2)

count = 0
for _ in total_number:
    count += 1
# 

print(count)
