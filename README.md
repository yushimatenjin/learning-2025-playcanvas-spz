
# PlayCanvas SPZ ビューアー

[drumath2237](https://github.com/drumath2237)さんの公開をしている、[@spz-loader/playcanvas](https://github.com/drumath2237/spz-loader)のライブラリを使用して、3D点群データを表示・操作するためのWebアプリケーションです。


## 使用技術

- [PlayCanvas](https://playcanvas.com/) - WebGLベースのゲームエンジン
- [@spz-loader/playcanvas](https://www.npmjs.com/package/@spz-loader/playcanvas) - SPZファイルをPlayCanvasに読み込むためのライブラリ
- [Vite](https://vitejs.dev/) - フロントエンドビルドツール


## はじめ方

### 前提条件

- pnpm

### インストール

1. リポジトリをクローン：
   ```bash
   git clone https://github.com/yourusername/learning-2025-playcanvas-spz.git
   cd learning-2025-playcanvas-spz
   ```

2. 依存関係をインストール：
   ```bash
   pnpm install
   ```

3. 開発サーバーを起動：
   ```bash
   pnpm dev
   ```

4. ブラウザを開いて `http://localhost:5173` にアクセス


### SPZ読み込みプロセス

アプリケーションは`@spz-loader/playcanvas`ライブラリを使用してSPZファイルを読み込み、レンダリングします：

```typescript
import { createGSplatEntityFromSpzUrlAsync } from "@spz-loader/playcanvas";

// SPZファイルを読み込む
const spzUrl = "./assets/park.spz";
const entity = await createGSplatEntityFromSpzUrlAsync(spzUrl);
entity.rotate(0, 180, 0);
root.addChild(entity);
```

----

# PlayCanvas SPZ Viewer

A web application for viewing and interacting with 3D point cloud data in SPZ format using PlayCanvas and the [@spz-loader/playcanvas](https://github.com/drumath2237/spz-loader) library by [drumath2237](https://github.com/drumath2237).


## Technologies Used

- [PlayCanvas](https://playcanvas.com/)
- [@spz-loader/playcanvas](https://www.npmjs.com/package/@spz-loader/playcanvas) 
- [Vite](https://vitejs.dev/)

## Getting Started

### Prerequisites

- pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/learning-2025-playcanvas-spz.git
   cd learning-2025-playcanvas-spz
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## How It Works

The application uses a client-side router to handle navigation between different pages. The main functionality is implemented in the following files:

- `main.ts` - Sets up the router and initializes the application
- `pages/spz/scene.ts` - Creates the PlayCanvas scene with camera and lighting
- `pages/spz/index.ts` - Loads the SPZ file and sets up interaction

### SPZ Loading Process

The application uses the `@spz-loader/playcanvas` library to load and render SPZ files:

```typescript
import { createGSplatEntityFromSpzUrlAsync } from "@spz-loader/playcanvas";

// Load the SPZ file
const spzUrl = "./assets/park.spz";
const entity = await createGSplatEntityFromSpzUrlAsync(spzUrl);
entity.rotate(0, 180, 0);
root.addChild(entity);
```

The `createGSplatEntityFromSpzUrlAsync` function creates a PlayCanvas entity that can be added to the scene. The entity is rotated to the correct orientation and then added to the scene's root.

