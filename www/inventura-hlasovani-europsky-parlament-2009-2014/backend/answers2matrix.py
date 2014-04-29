# -*- coding: utf-8 -*-

import csv
import json

json_data=open('../answers.json')

data = json.load(json_data)

out = []
for key0 in data:
  for key1 in data[key0]['vote']:
    item = {
      "voter": key0,
      "division": key1,
      "vote": data[key0]['vote'][key1]
    }
    out.append(item)
with open('matrix.json', 'w') as outfile:
  json.dump(out, outfile)
