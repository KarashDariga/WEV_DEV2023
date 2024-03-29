
def make_bricks(small, big, goal):
  return goal%5 >= 0 and goal%5 - small <= 0 and small + 5*big >= goal 

######### 
def lone_sum(a, b, c):
  if a == b == c:
    return 0
  if b == c:
    return a
  if a == c:
    return b
  if a == b:
    return c  
  return a + b + c 
######### 
def lucky_sum(a, b, c):
  if a == 13:
    return 0
  if b == 13:
    return a
  if c == 13:
    return a + b
  return a + b + c
######### 
def no_teen_sum(a, b, c):
  return fix_teen(a) + fix_teen(b) + fix_teen(c)
 
def fix_teen(n):
  #if 13 <= n <= 14 or 17 <= n <= 19:
  if n in [13, 14, 17, 18, 19]:
    return 0
######### 
def round_sum(a, b, c):
  return round10(a) + round10(b) + round10(c)
 
def round10(n):
  if n % 10 >= 5:
    return n + 10 - (n % 10)
  return n - (n % 10)  