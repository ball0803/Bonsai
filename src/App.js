import './App.css';
import { useEffect } from 'react';

function App() {

  const TradingView = window.TradingView;
  new TradingView.widget(
    {
    "width": 980,
    "height": 610,
    "symbol": "SET:SET",
    "interval": "D",
    "timezone": "Asia/Bangkok",
    "theme": "light",
    "style": "1",
    "locale": "in",
    "toolbar_bg": "#f1f3f6",
    "enable_publishing": false,
    "allow_symbol_change": true,
    "container_id": "tradingview_97d1f"
    }
    );
  return (
    <div className="App">
      <div class="tradingview-widget-container">
        <div id="tradingview_97d1f"></div>
        <div class="tradingview-widget-copyright"><a href="https://in.tradingview.com/symbols/SET-SET/" rel="noopener" target="_blank"><span class="blue-text">SET Chart</span></a> by TradingView</div>
      </div>
    </div>
  );
}

export default App;
