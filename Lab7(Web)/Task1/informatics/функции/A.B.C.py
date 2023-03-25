def minimum(a, b, c, d):
   return min(min(a, b), min(c, d))

a, b, c, d = map(int, input().split())

print(minimum(a, b, c, d))
########B
def power(a, n):
   return pow(a, n)

a, b = map(int, input().split())
print(power(a, b))
######C
def xor(x,y):
    return x^y

x, y = map(int, input().split())

print(xor(x,y))