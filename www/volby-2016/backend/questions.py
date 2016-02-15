# -*- coding: utf-8 -*-

import csv
import io
import json
import requests

url = "https://docs.google.com/spreadsheet/ccc?key=1B5oFFZP1rA5PMx289YCz9a-PyB6R4iIhXiFBUC8GWWU&output=csv"

try:
    tmp = os.path.realpath(__file__).split("/")
    path = "/".join(tmp[:-1]) + "/"
except:
    path = ""

i = 0
questions = []
r = requests.get(url)
r.encoding = 'utf-8'
csvio = io.StringIO(r.text, newline="")
for row in csv.reader(csvio):
    if i == 0:
        nothing = 0
    else:
        if row[4].strip() != '':
            item = {
                'id': row[0].strip(),
                'name': row[1].strip(),
                'question': row[2].strip(),
                'description': row[3].strip(),
                'order': float(row[4].strip())
            }
            questions.append(item);
    i = i + 1
 
questions = sorted(questions, key=lambda x:x['order'])
#print questions

#save file
with open(path+'questions.json', 'w') as outfile:
    json.dump(questions, outfile)
