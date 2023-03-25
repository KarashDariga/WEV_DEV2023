n = int(input())

a = list(map(int, input().split()))

for i in range(n):
   if i % 2 == 0:
      print(a[i], end = ' ')
#######B
n = int(input())

a = list(map(int, input().split()))

for i in a:
    if i%2==0:
        print(i,end=' ')     
########C          
n = int(input())

a = list(map(int, input().split()))

cnt = 0
for i in a:
    if i>0:
        cnt+=1

print(cnt)
######D
n = int(input())
a = list(map(int, input().split()))

cnt = 0
for i in range(1,n):
    if a[i]>a[i-1]:
        cnt+=1
        
print(cnt)
#######E
n = int(input())
a = list(map(int, input().split()))
cnt = 0
for i in range(0,n-1):
    if a[i]>0 and a[i+1]>0:
        cnt+=1
    elif a[i]<0 and a[i+1]<0:
        cnt+=1
if cnt==0:
    print("NO")
else:
    print("YES")
#######F    
n = int(input())
a = list(map(int, input().split()))
cnt = 0
for i in range(1,n-1):
   if a[i]>a[i-1] and a[i]>a[i+1]:
      cnt+=1
        
print(cnt)
#######G
n = int(input())
a = list(map(int, input().split()))
j = n-1
for i in range(0,int((n)/2)):
    a[i],a[j] = a[j],a[i]
    j-=1
for i in a:
    print(i,end = ' ')