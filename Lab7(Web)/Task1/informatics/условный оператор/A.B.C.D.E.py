a = int(input())

b = int(input())

if a>b:
   print(a)
else:
   print(b)
#######B
a = int(input())

if a%4==0:
   if a%100==0:
      if a%400==0:
         print("YES")
      else:
         print("NO")
   else:
      print("YES")
else:
   print("NO")
#########C
a = int(input())
b = int(input())

if a != 1 and b != 1:
    print("YES")
elif a == 1 and b == 1:
    print("YES")
else:
    print("NO")
#########D
x = int(input())
if x>0:
    print(1)
elif x<0:
    print(-1)
else:
    print(0)
######E
a = int(input())
b = int(input())
if a>b:
    print(1)
elif a<b:
    print(2)
else:
    print(0)       
    