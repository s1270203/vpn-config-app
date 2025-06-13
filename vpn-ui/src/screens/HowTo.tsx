import { Card } from 'flowbite-react'
import {
  CloudArrowDownIcon,
  ArrowPathIcon,
  WifiIcon,
} from '@heroicons/react/24/outline'

const steps = [
  {
    icon: <CloudArrowDownIcon className="w-8 h-8 text-blue-500 mb-4" />,
    title: 'ファイルを取得',
    description: '「ダウンロード」画面から WireGuard 設定ファイルを入手します。',
  },
  {
    icon: <ArrowPathIcon className="w-8 h-8 text-green-500 mb-4" />,
    title: 'インポート',
    description: 'WireGuard アプリで「設定をインポート」を選択。',
  },
  {
    icon: <WifiIcon className="w-8 h-8 text-purple-500 mb-4" />,
    title: '接続を開始',
    description: 'アプリ内のスイッチを ON にして接続完了。',
  },
]

export default function HowTo(){
  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        ご利用方法（How-to）
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step, idx) => (
          <Card
            key={idx}
            className="flex flex-col items-center bg-gray-800 text-white p-6"
          >
            {step.icon}
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-center text-gray-300">
              {step.description}
            </p>
          </Card>
        ))}
      </div>
    </div>
  )
}