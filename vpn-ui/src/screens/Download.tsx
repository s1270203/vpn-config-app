import { useState } from 'react'
import { Card, Button, Modal } from 'flowbite-react'
import { CloudArrowDownIcon, QrCodeIcon } from '@heroicons/react/24/outline'
import QRCode from 'react-qr-code'

export default function Download() {
  const config = {
    name: 'shared-vpn.conf',
    url: '/configs/shared-vpn.conf',
    updated: '2025-05-30',
  }
  const BASE_URL = import.meta.env.VITE_BASE_URL
  const configUrl = `${BASE_URL}/configs/shared-vpn.conf`


  const QR_PASSWORD = import.meta.env.VITE_QR_PASSWORD
  const [qrOpen, setQrOpen] = useState(false)

  // 認証付きでダウンロードもしくはQR表示を行う
  // 現在この機能は無効化中（AWS環境停止のため）
  const handleProtected = (action: 'download' | 'qr') => {
    const input = window.prompt('パスワードを入力してください:')
    if (input === QR_PASSWORD) {
      if (action === 'download') {
        const a = document.createElement('a');
        a.href = configUrl;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.download = 'shared-vpn.conf';
        a.click();
      } else {
        setQrOpen(true)
      }
    } else if (input !== null) {
      window.alert('パスワードが違います')
    }
  }

  return (
    <div className="h-full bg-gray-900 text-white px-6 py-8 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4">設定ファイルをダウンロード</h2>
      <p className="text-gray-400 mb-8 text-center max-w-lg">
        ダウンロードとQR表示はパスワード認証が必要です。  
        ボタンをクリックするとパスワード入力を求められます。
      </p>

      <Card className="bg-gray-800 text-white w-full max-w-sm p-6">
        <h3 className="text-xl font-semibold mb-2">{config.name}</h3>
        <p className="text-sm text-gray-400 mb-4">
          最終更新日: {config.updated}
        </p>
        <div className="flex space-x-2">
          <Button
            color="blue"
            onClick={() => handleProtected('download')}
          >
            <CloudArrowDownIcon className="w-5 h-5 mr-2" />
            ダウンロード
          </Button>
          <Button
            color="gray"
            outline
            onClick={() => handleProtected('qr')}
          >
            <QrCodeIcon className="w-5 h-5 mr-2" />
            QR表示
          </Button>
        </div>
      </Card>

      <Modal
        show={qrOpen}
        onClose={() => setQrOpen(false)}
        popup
        size="md"
      >
        <div className="p-6 text-center">
          <h3 className="text-xl font-semibold mb-4">QRコードで設定を取得</h3>
          <div className="flex justify-center mb-4">
            <QRCode value={configUrl} size={180} />
          </div>
          <p className="text-gray-400 mb-6">
            スマホアプリで読み取ってインポートしてください。
          </p>
          <Button color="gray" onClick={() => setQrOpen(false)}>
            閉じる
          </Button>
        </div>
      </Modal>
    </div>
  )
}