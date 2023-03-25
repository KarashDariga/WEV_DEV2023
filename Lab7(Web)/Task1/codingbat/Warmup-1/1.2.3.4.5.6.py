def sleep_in(weekday, vacation):
  if not weekday or vacation:
    return True
  else:
    return False
######
def diff21(n):
  if n <= 21:
    return 21 - n
  else:
    return (n - 21) * 2
######
def near_hundred(n):
  return ((abs(100 - n) <= 10) or (abs(200 - n) <= 10))         
####
def missing_char(str, n):
  front = str[:n]   
  back = str[n+1:]  
  return front + back
#######  
def monkey_trouble(a_smile, b_smile):
  if a_smile and b_smile:
    return True
  if not a_smile and not b_smile:
    return True
  return False 
########    
def parrot_trouble(talking, hour):
  return (talking and (hour < 7 or hour > 20))
