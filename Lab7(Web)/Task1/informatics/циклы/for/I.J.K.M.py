x = int(input())
cnt=0
for i in range(1,x+1):
    if x%i==0:
        cnt+=1
print(cnt)
#######J
sum = 0
for i in range(0,100):
    a = int(input())
    sum+=a
print(sum)
####K
n = int(input())
sum = 0
for i in range(n):
    a = int(input())
    sum+=a
print(sum)
####M
n = int(input())
sum = 0
for i in range(n):
    a = int(input())
    if a==0:
        sum+=1
print(sum)