import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from '@/components/ui/sonner'
import { ConfigProvider } from 'antd'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            titleFontSize: 20,
            cardGutter: 20,
            itemSelectedColor: '#000',
            itemColor: '#b0b0b0',
            itemHoverColor: '#fff',
            verticalItemMargin: '',
            itemActiveColor: '#fff',
          },
        },
      }}
    >
      <App />
    </ConfigProvider>

    <Toaster className='dark font-SentaSans' />
  </BrowserRouter>
)
