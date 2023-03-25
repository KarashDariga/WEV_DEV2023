def cigar_party(cigars, is_weekend):
  if is_weekend:
    return cigars >= 40
  return 40 <= cigars <= 60
######  
def date_fashion(you, date):
  if you <= 2 or date <= 2:
    return 0
  if you >= 8 or date >= 8:
    return 2
  return 1
#######
def squirrel_play(temp, is_summer):
  if is_summer:
    return 60 <= temp <= 100
  return 60 <= temp <= 90
######  
def caught_speeding(speed, is_birthday):
  if is_birthday:
    speed -= 5
     
  if speed <= 60:
      return 0
  if 60 < speed <= 80:
    return 1
  return 2
#######  
def sorta_sum(a, b):
  if 10 <= a + b < 20:
    return 20
  return a + b