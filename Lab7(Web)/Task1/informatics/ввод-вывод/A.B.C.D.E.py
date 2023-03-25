from math import sqrt

a = int(input())

b = int(input())

print(sqrt(a + b))
######
num = int(input())

print('The next number for the number {} is {}.'.format(num, num + 1) , end='\n')
print('The previous number for the number {} is {}.'.format(num, num - 1))
######
n = int(input())

k = int(input())

print(int(k / n))
#######
n = int(input())

k = int(input())

print(k % n)
#####
v = int(input())

t = int(input())

print(v * t % 109)