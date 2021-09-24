l1 = []
l2 = []

user_input = input()
l1 = input().split(' ')
user_input = input()
l2 = input().split(' ')
print(len(set(l1) - set(l2)))
