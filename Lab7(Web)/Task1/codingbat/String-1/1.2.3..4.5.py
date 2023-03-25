
def hello_name(name):
  return ("Hello " + name + '!')
######### 

def make_out_word(out, word):
  return out[:2] + word + out[2:]
######### 
def first_half(str):
  return str[0 : len(str) // 2]
######### 
def non_start(a, b):
  return a[1:] + b[1:] 
######### 
def make_abba(a, b):
  return a + b + b + a  