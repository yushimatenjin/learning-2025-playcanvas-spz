import { Asset, Color, Entity, Texture, Vec3 } from "playcanvas";
import { createScene } from "./scene";
import { createGSplatEntityFromSpzUrlAsync } from "@spz-loader/playcanvas";

const canvasElement = document.getElementById('application-canvas') as HTMLCanvasElement;
async function init() {
  try {
    const { root, app } = await createScene(canvasElement);

    // Cameraにスクリプトを追加
    const spzUrl = "./assets/park.spz";
    const entity = await createGSplatEntityFromSpzUrlAsync(spzUrl);
    entity.rotate(0, 180, 0);
    root.addChild(entity);

    // マウスクリック状態を追跡する変数
    let isMouseDown = false;

    // マウスイベントのリスナーを追加
    if (app.mouse) {
      app.mouse.on("mousedown", () => {
        console.log("mousedown");
        isMouseDown = true;
      });

      app.mouse.on("mouseup", () => {
        isMouseDown = false;
      });
    }

    // 毎フレーム回転をさせる（マウスクリック中は回転を止める）
    app.on("update", () => {
      if (!isMouseDown) {
        entity.rotate(0, 1, 0);
      }
    });

  } catch (error) {
    console.error("Error initializing application:", error);
  }
}

export { init };
