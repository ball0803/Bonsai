from requests.api import request
import yfinance as yf
import pandas as pd
from flask import Flask, jsonify

def zeroX(n):
    result = ""
    if (n < 10):
        result += "0"
    result += str (n)
    return result

def dump_Pandas_Timestamp (timeStamp):
    result = ""
    result += str(timeStamp.year) + "-" + zeroX(timeStamp.month) + "-" + zeroX(timeStamp.day)
    result += " " + zeroX(timeStamp.hour) + ":" + zeroX(timeStamp.minute) + ":" + zeroX(timeStamp.second)
    return result

def dump_Pandas_DataFrame (DF):
    result = []
    for indexItem in DF.index:
        Data = {"Date": 0, "Open": 0, "High": 0, "Low": 0, "Close": 0,"Volume": 0, "Dividends": 0, "Stock Splits": 0 }
        Data["Date"] = dump_Pandas_Timestamp (indexItem)
        for colname in DF.columns:
            Data[colname] = int(DF[colname][indexItem])

        result.append(Data)
    return result
    
# get historical market data
msft = yf.Ticker("^SET.BK")
hist = msft.history(period="5d", interval="15m")
    
app = Flask(__name__)

@app.route('/')
def index():
    return jsonify({"result" : dump_Pandas_DataFrame(hist)})

@app.route('/hist')
def get_hist():
    
    msft = request.args.get('msft')
    period = '1mo'
    interval = '1d'
    period = request.args.get('period')
    interval = request.args.get('interval')
    return jsonify({"result" : dump_Pandas_DataFrame(yf.Ticker(msft).history(period=period, interval=interval))})

if __name__ == __name__:
    app.run(debug=True)
