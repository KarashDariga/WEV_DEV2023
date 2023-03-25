import math
n = int(input())
i = 1

while i<=n:
    if int(math.sqrt(i))*int(math.sqrt(i))==i:
        print(i)
    i+=1
#######B    
n = int(input())
i = 2
while i<=n:
    if n%i==0:
        print(i)
        break
    i+=1
#####C    
n = int(input())
i = 1

while i<=n:
    print(i,end=' ')
    i=i*2
#######D    
n = int(input())

while n>1:
    n=n/2
    
if n==1:
    print("YES")
else:
    print("NO")
#####E    
n = int(input())
i = 1
cnt = 0

while i<n:
   i=i*2
   cnt+=1
   
print(cnt)