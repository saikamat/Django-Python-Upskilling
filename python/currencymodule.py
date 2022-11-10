# %%
import requests
from datetime import datetime

# %%
def getCurrentTime():
    now = datetime.now()
    current_time = now.strftime("%H:%M:%S")
    return now

# %%
def getBuyValue(currency_type):
    buy_value = requests.get('https://blockchain.info/ticker').json()[currency_type]['buy']
    print('{} buy value at {} is {}'.format(currency_type, getCurrentTime(), buy_value))


