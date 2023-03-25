a = int(input())
b = int(input())
for i in range(a,b+1):
    if i%2==0:
        print(i,end=' ')
#####B        
a = int(input())
b = int(input())
c = int(input())
d = int(input())

for i in range(a, b+1):
    if i%d==c:
        print(i,end=' ')
##########C
import math

a = int(input())
b = int(input())

for i in range(a,b+1):
    if int(math.sqrt(i)) * int(math.sqrt(i))==i:
        print(i,end=' ')
########G
import math
a = int(input())
b = int(input())
for i in range(a,b+1):
    if int(math.sqrt(i))*int(math.sqrt(i))==i:
        print(i,end=' ')
######H                         
x = int(input())
for i in range(1,x+1):
    if x%i==0:
        print(i,end=" ")