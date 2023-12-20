const fs = require('fs');
const path = require('path');

const serviceWorkerPath = path.join(__dirname, '..', 'build', 'service-worker.js');

// 現在の日付と時間を取得してCACHE_NAMEを生成
const today = new Date();
const formattedDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}-${today.getHours()}-${today.getMinutes()}`;
const newCacheName = `my-portfolio-cache-${formattedDate}`;

// build/static内のアセットを読み取る
const cssFiles = fs.readdirSync(path.join(__dirname, '..', 'build', 'static', 'css')).map(file => `'${path.join('/static/css/', file)}'`);
const jsFiles = fs.readdirSync(path.join(__dirname, '..', 'build', 'static', 'js')).map(file => `'${path.join('/static/js/', file)}'`);

const assets = [
    "'/'",
    "'/icon-192x192.png'",
    "'/icon-512x512.png'",
    ...cssFiles,
    ...jsFiles
];

// service-worker.jsの内容を読み取り
let swContent = fs.readFileSync(serviceWorkerPath, 'utf-8');

// プレースホルダーを新しいアセットで置き換える
swContent = swContent.replace('/*AUTO_INSERT_ASSETS_HERE*/', assets.join(',\n'));

// CACHE_NAMEを新しい名前に更新
swContent = swContent.replace(/const CACHE_NAME = .+;/, `const CACHE_NAME = '${newCacheName}';`);

// 更新された内容をservice-worker.jsに書き込む
fs.writeFileSync(serviceWorkerPath, swContent);