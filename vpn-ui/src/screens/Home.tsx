import { 
  Button,
} from "flowbite-react";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-center px-6 text-center">
        <h1 className="mt-0 mb-4 text-5xl font-extrabold leading-tight text-white">
          VPN Config QR Generator
        </h1>
        <p className="mt-0 mb-6 text-lg font-normal text-gray-300">
          モバイル端末向けにWireGuard設定をQRで配布
        </p>
        <Button size="lg" color="blue" href="/download">
          設定ファイルをダウンロード
        </Button>
      </main>
    </div>
  );
}
