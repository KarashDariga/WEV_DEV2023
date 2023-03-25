
def pos_neg(a, b, negative):
  if negative:
    return (a < 0 and b < 0)
  else:
    return ((a < 0 and b > 0) or (a > 0 and b < 0))
######
def front_back(str):
  if len(str) <= 1:
    return str
  
  mid = str[1:len(str)-1] 
 
  return str[len(str)-1] + mid + str[0]
#######  
def sum_double(a, b):
  sum = a + b
  
  if a == b:
    sum = sum * 2
  return sum
#### 
def makes10(a, b):
  return (a == 10 or b == 10 or a+b == 10)
##### 
def not_string(str):
  if len(str) >= 3 and str[:3] == "not":
    return str
  return "not " + str
####  
 def front3(str):
  # Figure the end of the front
  front_end = 3
  if len(str) < front_end:
    front_end = len(str)
  front = str[:front_end]
  return front + front + front  